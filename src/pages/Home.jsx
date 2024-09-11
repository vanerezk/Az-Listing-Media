import Video from '../components/Video/Video';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from '../components/Reviews/Reviews';
import Topbutton from '../components/Top/Topbutton';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Listings from '../components/Listings/Listings';
import Abooutmain from '../components/Aboutmain/Aboutmain';

function Home() {
  return (
    <>
      <Video />
      <Services />
      <Portfolio />
      <Abooutmain />
      <Listings />
      <Reviews />
      {/* Final video */}
      <div style={{textAlign: 'center', position: 'relative'}}>
        <video
          src='./src/assets/videos/V2_9513 W Atlantis Way.mp4'
          className='w-100 mx-auto'
          style={{
            height: '600px',
            objectFit: 'cover',
            filter: 'brightness(70%)',
          }}
          autoPlay
          muted
          loop></video>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <h1
            className=' text-white mx-auto'
            style={{letterSpacing: '10px'}}>
            LET US TAKE CARE OF YOU!
          </h1>
          <button
            className='btn btn-light d-none d-md-block mx-auto'
            style={{marginTop: '20px', borderRadius: '0px', padding: '10px 30px'}}>
            <Link
              to='https://spiro.media/'
              target='_blank'
              style={{textDecoration: 'none', color: 'black'}}>
              SCHEDULE NOW
            </Link>
          </button>
          <button
            className='btn btn-light d-md-none'
            style={{marginTop: '20px', borderRadius: '0px', padding: '10px 20px'}}>
            <Link
              to='https://spiro.media/'
              target='_blank'
              style={{textDecoration: 'none', color: 'black'}}>
              SCHEDULE NOW
            </Link>
          </button>
        </div>
      </div>
      <Topbutton />
    </>
  );
}

export default Home;
