// == Import
import { Routes, Route } from 'react-router-dom';
import githubLogo from 'src/assets/picture/logo-github.png';
import Menu from '../Menu';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <header>
        <img src={githubLogo} alt="github logo" />
        <Menu />
      </header>
    </div>
  );
}

// == Export
export default App;
