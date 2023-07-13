import './App.css';
import Home from './components/Home';
import Links from './components/Links';
import About from './components/About';
import LinkDesc from './components/LinkDesc'

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/Links">Links</Link>
        </button>
        <button>
          <Link to="/About">About</Link>
        </button>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Links' element={<Links />} />
        <Route path='/Links/:id' element={<LinkDesc />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;