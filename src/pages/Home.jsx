import Video from '../components/Video/Video';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Topbutton from '../components/Top/Topbutton';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Listings from '../components/Listings/Listings';
import Aboutmain from '../components/Aboutmain/Aboutmain';

import 'react-multi-carousel/lib/styles.css';
import finalImage from '../assets/photos/1836_E_Turquoise_Ave-63.jpg';
import {Col} from 'react-bootstrap';

function Home() {
  return (
    <>
      <Video />
      <Services />
      <Portfolio />
      <Aboutmain />
      <Listings />
      {/* <Reviews /> */}
      {/* <Brands /> */}
      {/* Final video */}
      <div style={{textAlign: 'center', position: 'relative'}}>
        <img
          src={finalImage}
          className='w-100 mx-auto'
          style={{
            height: '700px',
            objectFit: 'cover',
            filter: 'brightness(70%)',
          }}
        />
        <Col className='text-container  '>
          <h1
            className=' text-white'
            style={{letterSpacing: '10px', fontSize: '30px'}}>
            <br />
            <p style={{letterSpacing: '8px', fontSize: '78px'}}>ELEVATE YOUR LISTING </p>
          </h1>

          <button
            className='btn btn-light'
            style={{
              marginTop: '60px',

              borderRadius: '5px',
              padding: '15px 35px',
            }}>
            <Link
              to='https://spiro.media/'
              target='_blank'
              style={{
                textDecoration: 'none',
                color: 'black',
                letterSpacing: '1px',
                fontSize: '18px',
              }}>
              BOOK A SHOOT
            </Link>
          </button>
        </Col>
      </div>{' '}
      <Topbutton />
    </>
  );
}

export default Home;
