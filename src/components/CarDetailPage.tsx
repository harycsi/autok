import { FC } from 'react';
import { CarDetail } from '../data/carDetails';
import styles from '../styles/CarDetail.module.css';

const HOME_PATH = '/'; 

type CarDetailPageProps = {
  detail: CarDetail;
  onNavigateHome: () => void;
};

export const CarDetailPage: FC<CarDetailPageProps> = ({
  detail,
  onNavigateHome,
}) => (
  <article className={styles.article}>
    <h1 className={styles.title}>{detail.name}</h1>

    <div className={styles.hero}>
      <img src={detail.heroImage} alt={detail.name} />
    </div>

    <p className={styles.lead}>{detail.lead}</p>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Jellemzők</h2>
      <ul className={styles.features}>
        {detail.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{detail.specTitle}</h2>
      <div className={styles.tableScroll}>
        <table className={`${styles.table} ${styles.tableLarge}`}>
          <thead>
            <tr>
              <th>Motorváltozat</th>
              <th>Motor típus</th>
              <th>Teljesítmény</th>
              <th>Maximális sebesség</th>
              <th>Átlagfogyasztás (l/100 km)</th>
              <th>CO₂ kibocsátás (g/km)</th>
            </tr>
          </thead>
          <tbody>
            {detail.specs.map((row) => (
              <tr key={row.variant}>
                <td>{row.variant}</td>
                <td>{row.engineType}</td>
                <td>{row.power}</td>
                <td>{row.topSpeed}</td>
                <td>{row.consumption}</td>
                <td>{row.co2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {detail.sections.map((section) => (
      <section key={section.title} className={styles.section}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <p className={styles.sectionBody}>{section.body}</p>
      </section>
    ))}

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{detail.priceTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={`${styles.table} ${styles.tableCompact}`}>
          <thead>
            <tr>
              <th>Modell</th>
              <th>Ár (HUF)</th>
              <th>Motor</th>
              <th>Hajtás</th>
            </tr>
          </thead>
          <tbody>
            {detail.prices.map((row) => (
              <tr key={row.model}>
                <td>{row.model}</td>
                <td>{row.price}</td>
                <td>{row.engine}</td>
                <td>{row.drive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <p className={styles.closingNote}>{detail.closingNote}</p>
    
    <button className={styles.button}>Megvásárolom</button>
  </article>
);
