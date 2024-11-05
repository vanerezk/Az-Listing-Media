import Video from '../components/Video/Video';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from '../components/Reviews/Reviews';
import Topbutton from '../components/Top/Topbutton';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Listings from '../components/Listings/Listings';
import Aboutmain from '../components/Aboutmain/Aboutmain';

import 'react-multi-carousel/lib/styles.css';
import finalvideo from '../assets/videos/V2_9513 W Atlantis Way.mp4';
import {Col} from 'react-bootstrap';
function Home() {
  return (
    <>
      <Video />
      <Services />
      <Portfolio />
      <Aboutmain />
      <Listings />
      <Reviews />

      {/* Final video */}
      <div style={{textAlign: 'center', position: 'relative'}}>
        <video
          src={finalvideo}
          className='w-100 mx-auto'
          style={{
            height: '500px',
            objectFit: 'cover',
            filter: 'brightness(70%)',
          }}
          autoPlay
          muted
          loop></video>
        <Col className='text-container  d-none d-md-block '>
          <h1
            className=' text-white'
            style={{letterSpacing: '10px', fontSize: '30px'}}>
            <br />
            <b style={{letterSpacing: '8px', fontSize: '78px'}}>HIRE US NOW!!!!!!!!!!!!</b>
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
        <Col></Col>
      </div>
      <Topbutton />
    </>
  );
}

export default Home;
