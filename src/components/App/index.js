// == Import
import { Routes, Route } from 'react-router-dom';
import githubLogo from 'src/assets/picture/logo-github.png';
import Menu from '../Menu';
import Faq from '../Faq';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <header>
        <img src={githubLogo} alt="github logo" />
        <Menu />
      </header>
      <Routes>
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
