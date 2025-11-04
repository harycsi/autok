import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Title, Home, Model } from './components/Autok';
import { AutokLista, cars } from './components/AutokLista';
import { carDetails } from './data/carDetails';
import { CarDetailPage } from './components/CarDetailPage';
import layoutStyles from './styles/Layout.module.css';

const HOME_PATH = '/';

const normalizePath = (value: string) => {
  if (!value) {
    return HOME_PATH;
  }

  const normalized = value.replace(/\/+$/, '');
  return normalized === '' ? HOME_PATH : normalized;
};

const scrollToId = (id: string) => {
  const node = document.getElementById(id);
  if (node) {
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

type NotFoundProps = {
  onNavigateHome: () => void;
};

const NotFound = ({ onNavigateHome }: NotFoundProps) => (
  <div>
    <h1>Az oldal nem található</h1>
    <p>A keresett modell jelenleg nem érhető el.</p>
  </div>
);

function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopstate = () =>
      setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []);

  const navigate = useCallback(
    (to: string) => {
      const next = normalizePath(to);
      if (next === path) {
        return;
      }
      window.history.pushState({}, '', next);
      setPath(next);
    },
    [path]
  );

  const handleNavigateHome = useCallback(() => {
    navigate(HOME_PATH);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  const handleHomeLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      handleNavigateHome();
    },
    [handleNavigateHome]
  );

  const handleModelLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (path !== HOME_PATH) {
        navigate(HOME_PATH);
        setTimeout(() => scrollToId('models'), 80);
      } else {
        scrollToId('models');
      }
    },
    [navigate, path]
  );

  const activeCarId = useMemo(() => {
    const match = path.match(/^\/cars\/([\w-]+)$/);
    return match?.[1];
  }, [path]);

  const content: ReactNode = useMemo(() => {
    if (!activeCarId) {
      return <AutokLista array={cars} onNavigate={navigate} />;
    }

    const detail = carDetails[activeCarId];
    if (detail) {
      return (
        <CarDetailPage detail={detail} onNavigateHome={handleNavigateHome} />
      );
    }

    return <NotFound onNavigateHome={handleNavigateHome} />;
  }, [activeCarId, handleNavigateHome, navigate]);

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.shell}>
        <header className={layoutStyles.header}>
          <Title className={layoutStyles.title} title="Webshop" />
        </header>
        <nav className={layoutStyles.nav}>
          <ul className={layoutStyles.navList}>
            <li>
              <Home
                className={layoutStyles.navLink}
                home="Kezdőlap"
                href={HOME_PATH}
                onClick={handleHomeLinkClick}
              />
            </li>
            <li>
              <Model
                className={layoutStyles.navLink}
                model="Modellek"
                href={`${HOME_PATH}#models`}
                onClick={handleModelLinkClick}
              />
            </li>
          </ul>
        </nav>
        <main className={layoutStyles.main}>{content}</main>
        <footer className={layoutStyles.footer}>
          Gombos Adrián és Haragos Csilla
        </footer>
      </div>
    </div>
  );
}

export default App;
