import './Video.css';
import {Link} from 'react-router-dom';

import photo from '../../assets/photos/1836_E_Turquoise_Ave-61.jpg';
import {useState, useEffect} from 'react';
function Video() {
  const [currentText, setCurrentText] = useState('MEDIA COMPANY');
  const texts = ['AERIAL MEDIA', 'PHOTOGRAPHY', 'VIDEOGRAPHY', 'VIRTUAL TOURS', 'FLOORS PLANS'];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentText, texts]);

  return (
    <>
      <img
        src={photo}
        id='backgroundphoto'
        className='w-100 mx-auto '
        alt='Community Ground Photo Example'
      />

      <div
        className='text-container d-none d-md-block '
        style={{marginTop: '100px'}}>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px', fontSize: '30px'}}>
          THE VALLEY'S PREMIUM
          <br />
          <b
            style={{letterSpacing: '8px', fontSize: '78px'}}
            className='animated-text'>
            {currentText}
          </b>
        </h1>
        <h4
          className=' text-white'
          style={{letterSpacing: '1px', fontSize: '22px'}}>
          SERVING THE GREATER PHOENIX AREA
        </h4>
        <button
          className='btn btn-light '
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
          style={{letterSpacing: '10px', fontSize: '15px'}}>
          THE VALLEY'S REAL ESTATE
          <br />
          <b
            style={{letterSpacing: '8px', fontSize: '30px'}}
            className='animated-text'>
            {currentText}
          </b>
        </h1>
        <h4
          className=' text-white'
          style={{letterSpacing: '1px', fontSize: '15px'}}>
          SERVING THE GREATER PHOENIX AREA
        </h4>
        <button
          className='btn btn-light'
          style={{
            marginTop: '60px',
            scale: '0.8',
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
            BOOK NOW
          </Link>
        </button>
      </div>
    </>
  );
}

export default Video;
