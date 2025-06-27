import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pricings from './pages/Pricings';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <main className='App'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/pricings'
            element={<Pricings />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
