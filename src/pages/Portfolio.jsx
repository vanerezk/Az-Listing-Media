import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
          src='./src/assets/videos/V1_15323 W Campbell Ave.mp4'
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
          src='./src/assets/videos/V1_15323 W Campbell Ave.mp4'
          type='video/mp4'
        />
      </video>
      <div className='text-container d-none d-md-block  '>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px', fontSize: '60px', fontWeight: 'bold'}}>
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
              src='./src/assets/photos/42 E Interlacken Dr-1.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/42 E Interlacken Dr-5.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/42 E Interlacken Dr-35.jpg'
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
              src='./src/assets/photos/42 E Interlacken Dr-36.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src='./src/assets/photos/42 E Interlacken Dr-43.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
        </Row>
      </div>
      {/* Video  PUGGET AVE */}
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
          src='./src/assets/videos/19321 W Puget Ave_V1.mp4'
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
          src='./src/assets/videos/19321 W Puget Ave_V1.mp4'
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
              src='./src/assets/photos/19312 W Puget Ave-21.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/19312 W Puget Ave-25.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/19312 W Puget Ave-29.jpg'
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
              src='./src/assets/photos/19312 W Puget Ave-44.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src='./src/assets/photos/19312 W Puget Ave-51.jpg'
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
          src='./src/assets/videos/19321 W Puget Ave_V1.mp4'
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
          src='./src/assets/videos/19321 W Puget Ave_V1.mp4'
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
              src='./src/assets/photos/207208 N 129th Dr-89.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/207208 N 129th Dr-90.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={4}
            md={4}>
            <img
              src='./src/assets/photos/207208 N 129th Dr-95.jpg'
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
              src='./src/assets/photos/207208 N 129th Dr-98.jpg'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col
            xs={6}
            md={6}>
            <img
              src='./src/assets/photos/207208 N 129th Dr-145.jpg'
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
