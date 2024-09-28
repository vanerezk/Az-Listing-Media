import './Video.css';
import {Link} from 'react-router-dom';
import video from '../../assets/videos/2016 W Gloria Ln_V1.mp4';
function Video() {
  return (
    <>
      <video
        id='backgroundvideo'
        style={{width: '100%', height: '100vh', objectFit: 'cover'}}
        autoPlay
        muted
        loop>
        <source
          src={video}
          type='video/mp4'
        />
      </video>
      <div
        className='text-container d-none d-md-block '
        style={{marginTop: '100px'}}>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px', fontSize: '30px'}}>
          THE VALLEY'S REAL ESTATE
          <br />
          <b style={{letterSpacing: '8px', fontSize: '78px'}}>MEDIA COMPANY</b>
        </h1>
        <h4
          className=' text-white'
          style={{letterSpacing: '1px', fontSize: '22px'}}>
          SERVING THE GREATER PHOENIX AREA
        </h4>
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
      </div>
      <div
        className='text-container d-md-none '
        style={{marginTop: '100px'}}>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px'}}>
          A REAL ESTATE
          <br />
          <b style={{fontSize: '30px'}}>MEDIA COMPANY</b>
        </h1>
        <h4
          className=' text-white'
          style={{fontSize: '13px'}}>
          THE VALLEY'S PREMIER REAL ESTATE MARKETING SOLUTION
        </h4>
        <button
          className='btn btn-light'
          style={{marginTop: '100px', borderRadius: '0px', padding: '9px 20px'}}>
          <Link
            to='https://spiro.media/'
            target='_blank'
            style={{textDecoration: 'none', color: 'black'}}>
            SCHEDULE NOW
          </Link>
        </button>
      </div>
    </>
  );
}

export default Video;
