// == Import
import { Routes, Route } from 'react-router-dom';
import githubLogo from 'src/assets/picture/logo-github.png';
import Menu from '../Menu';
import Faq from '../Faq';
import SearchPage from '../SearchPage';
import NotFound from '../NotFound';
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
        <Route path="/" element={<SearchPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
