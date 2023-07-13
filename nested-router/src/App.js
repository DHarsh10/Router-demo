import './App.css';
import Home from './components/Home';
import Links from './components/Links';
import About from './components/About';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import TabA from './components/linksComponents/TabA';
import TabB from './components/linksComponents/TabB';
import TabC from './components/linksComponents/TabC';
import TabD from './components/linksComponents/TabD';
import LinkDesc from './components/LinkDesc';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/Links/:id' element={<LinkDesc />} />
          <Route path='/Links' element={<Links />}>

            <Route path='/Links' element={<TabA />} />
            <Route path='/Links/Tab-B' element={<TabB />} />
            <Route path='/Links/Tab-C' element={<TabC />} />
            <Route path='/Links/Tab-D' element={<TabD />} />
          </Route>
          <Route path='/About' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;