import TopButton from '../components/Top/Topbutton';

import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import photoFondo from '../assets/photos/1836_E_Turquoise_Ave-45.jpg';
import PortfolioMosaic from '../components/PortfolioMosaic/PortfolioMosaic';

function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);
  return (
    <>
      <img
        src={photoFondo}
        id='backgroundphoto'
        className='w-100 mx-auto '
        alt='Community Ground Photo Example'
      />
      <div
        className='text-container d-none d-md-block'
        style={{marginTop: '100px'}}>
        <h6
          className='text-center text-white'
          style={{letterSpacing: '10px', fontSize: '30px'}}>
          TAKE A LOOK AT
        </h6>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '78px', marginBottom: '50px'}}>
          OUR POTFOLIO
        </h1>
      </div>
      <div className='text-container d-block d-md-none '>
        <h6
          className='text-center text-white'
          style={{letterSpacing: '10px'}}>
          TAKE A LOOK AT
        </h6>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
          OUR PORTFOLIO
        </h1>
      </div>
      <PortfolioMosaic />

      <TopButton />
    </>
  );
}

export default Portfolio;
