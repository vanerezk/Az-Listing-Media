import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TopButton from '../components/Top/Topbutton';
import firstvideo from '../assets/videos/V1_15323 W Campbell Ave.mp4';
import puggetvideo from '../assets/videos/19321 W Puget Ave_V1.mp4';
import interlacken from '../assets/photos/42 E Interlacken Dr-1.jpg';
import interlackentwo from '../assets/photos/42 E Interlacken Dr-5.jpg';
import droneone from '../assets/photos/42 E Interlacken Dr-35.jpg';
import dronetwo from '../assets/photos/42 E Interlacken Dr-36.jpg';
import interlackenfive from '../assets/photos/42 E Interlacken Dr-43.jpg';
import puggetone from '../assets/photos/19312 W Puget Ave-21.jpg';
import puggettwo from '../assets/photos/19312 W Puget Ave-25.jpg';
import puggetthree from '../assets/photos/19312 W Puget Ave-29.jpg';
import puggetfour from '../assets/photos/19312 W Puget Ave Website-1.jpg';
import puggetfive from '../assets/photos/19312 W Puget Ave Website-2.jpg';
import puggetsix from '../assets/photos/19312 W Puget Ave Website-3 3.jpg';
import puggetseven from '../assets/photos/19312 W Puget Ave_Twilight-1.jpg';
import puggeteight from '../assets/photos/19312 W Puget Ave_Twilight-2.jpg';
import drfirst from '../assets/photos/207208 N 129th Dr-89.jpg';
import drsecond from '../assets/photos/207208 N 129th Dr-90.jpg';
import drthird from '../assets/photos/207208 N 129th Dr-95.jpg';

import dronethird from '../assets/photos/207208 N 129th Dr-145.jpg';
import dronefourth from '../assets/photos/22619 N San Ramon_Drone-3.jpg';
import dronefifth from '../assets/photos/39718 N Bridlewood Way Drone-10.jpg';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

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
      <h1
        id='photography'
        style={{zIndex: '-1', position: 'absolute', marginTop: '500px'}}></h1>
      <video
        id='backgroundvideo'
        style={{
          width: '100%',
          height: '75vh',
          objectFit: 'cover',
          zIndex: '-1',
          marginTop: '100px',
        }}
        autoPlay
        muted
        loop
        className='d-none d-md-block'>
        <source
          src={firstvideo}
          type='video/mp4'
        />
      </video>
      <video
        id='backgroundvideo'
        style={{
          width: '100%',
          height: '25vh',
          objectFit: 'cover',
          zIndex: '-1',
          marginTop: '100px',
        }}
        autoPlay
        muted
        loop
        className='d-md-none'>
        <source
          src={firstvideo}
          type='video/mp4'
        />
      </video>
      <div className='text-container d-none d-md-block  '>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px', fontSize: '40px', fontWeight: 'bold'}}>
          PORTFOLIO
        </h1>
      </div>
      <div className='text-container d-md-none   '>
        <h1
          className=' text-white'
          style={{
            letterSpacing: '10px',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '470px',
            marginLeft: '20px',
          }}>
          PORTFOLIO
        </h1>
      </div>

      {/* Images */}
      <section>
        <div
          className=' col-lg-12 col-md-6 col-sm-12 mx-auto '
          style={{marginTop: '20px', width: '80%'}}>
          <h4
            className='text-center '
            style={{marginTop: '40px', fontSize: '30px'}}>
            PHOTOGRAPHY
          </h4>
          <hr style={{width: '10%', margin: 'auto', marginBottom: '20px'}} />
          <Row>
            <Col
              xs={4}
              md={4}>
              <img
                src={interlacken}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={interlackentwo}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={interlackenfive}
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetone}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggettwo}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetthree}
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetfour}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetfive}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetsix}
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetsix}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggetseven}
                alt=''
                className='img-fluid'
              />
            </Col>
            <Col
              xs={4}
              md={4}>
              <img
                src={puggeteight}
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col
              xs={4}
              md={4}>
              <img
                src={drfirst}
                alt=''
                className='img-fluid'
              />
            </Col>

            <Col
              xs={4}
              md={4}>
              <img
                src={drsecond}
                alt=''
                className='img-fluid'
              />
            </Col>
            <h1
              id='videography'
              style={{zIndex: '-1', position: 'absolute', marginTop: '200px'}}></h1>
            <Col
              xs={4}
              md={4}>
              <img
                src={drthird}
                alt=''
                className='img-fluid'
              />
            </Col>
          </Row>
        </div>
      </section>

      <div
        className=' col-lg-12 col-md-6 col-sm-12 mx-auto '
        style={{marginTop: '20px', width: '80%'}}>
        <h4
          className='text-center '
          style={{marginTop: '40px', fontSize: '30px'}}>
          VIDEOGRAPHY
        </h4>
        <hr style={{width: '10%', margin: 'auto', marginBottom: '20px'}} />
      </div>

      {/* Video  PUGGET AVE */}
      <Row
        style={{marginTop: '20px', width: '80%'}}
        className='mx-auto '>
        <video
          style={{
            width: '50%',
            height: '100%',
            objectFit: 'contain',
            zIndex: '-1',
            marginTop: '20px',
          }}
          autoPlay
          muted
          loop>
          <source
            src={puggetvideo}
            type='video/mp4'
          />
        </video>

        {/* Video  129th */}
        <video
          style={{
            width: '50%',
            height: '100%',
            objectFit: 'contain',
            zIndex: '-1',
            marginTop: '20px',
          }}
          autoPlay
          muted
          loop>
          <source
            src={firstvideo}
            type='video/mp4'
          />
        </video>
      </Row>
      <h1
        id='drone'
        style={{zIndex: '-1', position: 'absolute', marginTop: '-170px'}}></h1>
      <div
        className=' col-lg-12 col-md-6 col-sm-12 mx-auto '
        style={{marginTop: '20px', width: '80%'}}>
        <h4
          className='text-center '
          style={{marginTop: '40px', fontSize: '30px'}}>
          DRONE
        </h4>
        <hr style={{width: '10%', margin: 'auto', marginBottom: '20px'}} />
        <Row>
          <Col
            xs={4}
            md={4}>
            <img
              src={droneone}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src={dronetwo}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src={dronethird}
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <Col
            xs={4}
            md={4}>
            <img
              src={dronefourth}
              alt=''
              className='img-fluid'
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src={dronefifth}
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
      </div>

      <TopButton />
    </>
  );
}

export default Portfolio;
