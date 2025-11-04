import { Container } from "./components/Container";
import { Title, Home, Model } from "./components/Autok";
import { AutokLista, cars } from "./components/AutokLista";


function App() {
  return (
    // Fragment
    <>
      <header><Title title="Webshop"/></header>
      <nav>
        <ul>
          <li><Home home="Kezdőlap"/></li>
          <li><Model model="Modellek"/></li>
        </ul>
      </nav>
      <AutokLista array={cars} />
      <footer>Gombos Adrián és Haragos Csilla</footer>
    </>
  );
}

export default App;