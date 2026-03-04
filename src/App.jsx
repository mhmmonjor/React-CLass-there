
import { Route, Routes } from 'react-router-dom';
import './App.css'
import RootLayouts from './components/layouts/RootLayouts';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Price from './components/layouts/Price';





function App() {


  return (



    <>
      <Routes>
        <Route path='/' element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='Services' element={<Services />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Price' element={<Price />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
