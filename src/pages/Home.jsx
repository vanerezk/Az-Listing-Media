import Video from '../components/Video/Video';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from '../components/Reviews/Reviews';
import Topbutton from '../components/Top/Topbutton';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Listings from '../components/Listings/Listings';
import Aboutmain from '../components/Aboutmain/Aboutmain';
import firstlogo from '../assets/photos/Pulte_Group_updated_logo.png';
import secondlogo from '../assets/photos/Realty_ONE_Group_Logo_Black_Text.png';
import thirdlogo from '../assets/photos/REAX_BIG.png';
import fourthlogo from '../assets/photos/Noble_Logo_Final_Blk.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import finalvideo from '../assets/videos/V2_9513 W Atlantis Way.mp4';
function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };
  return (
    <>
      <Video />
      <Services />
      <Portfolio />
      <Aboutmain />
      <Listings />
      <Reviews />
      {/* brands */}
      <div
        className='mx-auto d-none d-md-block bg-light'
        style={{marginTop: '40px'}}>
        <Carousel
          responsive={responsive}
          interval={20000}
          arrows={false}
          infinite={true}
          autoPlay={true}
          className=' mx-auto w-75 text-center'>
          <img
            src={firstlogo}
            style={{
              width: '400px',
              height: '100px',
              padding: '10px',
              marginTop: '12px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={secondlogo}
            style={{
              width: '400px',
              height: '100px',
              padding: '5px',
              marginTop: '15px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={thirdlogo}
            style={{
              width: '300px',
              height: '50px',
              marginTop: '35px',
              padding: '5px',

              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={fourthlogo}
            style={{
              width: '500px',
              height: '120px',
              padding: '5px',
              marginTop: '10px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
        </Carousel>
      </div>
      {/* Final video */}
      <div style={{textAlign: 'center', position: 'relative'}}>
        <video
          src={finalvideo}
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
