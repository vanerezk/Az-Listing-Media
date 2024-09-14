import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import firstvideo from '../assets/videos/V1_15323 W Campbell Ave.mp4';
import puggetvideo from '../assets/videos/19321 W Puget Ave_V1.mp4';
import interlacken from '../assets/photos/42 E Interlacken Dr-1.jpg';
import interlackentwo from '../assets/photos/42 E Interlacken Dr-5.jpg';
import interlackenthree from '../assets/photos/42 E Interlacken Dr-35.jpg';
import interlackenfour from '../assets/photos/42 E Interlacken Dr-36.jpg';
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
import drfourth from '../assets/photos/207208 N 129th Dr-98.jpg';
import drfifth from '../assets/photos/207208 N 129th Dr-145.jpg';
function Portfolio() {
  return (
    <>
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
      <div className='text-container d-md-none  '>
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
      <div
        className=' col-lg-12 col-md-6 col-sm-12 '
        style={{marginTop: '20px'}}>
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
              src={interlackenthree}
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <Col
            xs={6}
            md={6}>
            <img
              src={interlackenfour}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src={interlackenfive}
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
      </div>
      {/* Video  PUGGET AVE */}
      <video
        className='d-none d-md-block'
        style={{
          width: '100%',
          height: '75vh',
          objectFit: 'cover',
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
      <video
        className='d-md-none'
        style={{
          width: '100%',
          height: '25vh',
          objectFit: 'cover',
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
      {/* Images */}
      <div
        className=' col-lg-12 col-md-6 col-sm-12 '
        style={{marginTop: '20px'}}>
        <Row>
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
            xs={6}
            md={6}>
            <img
              src={puggetfour}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src={puggetfive}
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
      </div>
      {/* Video  129th */}
      <video
        id='backgroundvideo'
        className='d-none d-md-block'
        style={{
          width: '100%',
          height: '75vh',
          objectFit: 'cover',
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
      <video
        id='backgroundvideo'
        className='d-md-none'
        style={{
          width: '100%',
          height: '25vh',
          objectFit: 'cover',
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
      {/* Images */}
      <div
        className=' col-lg-12 col-md-6 col-sm-12 '
        style={{marginTop: '20px'}}>
        <Row>
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
        <Row style={{marginTop: '20px'}}>
          <Col
            xs={6}
            md={6}>
            <img
              src={drfourth}
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src={drfifth}
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Portfolio;
