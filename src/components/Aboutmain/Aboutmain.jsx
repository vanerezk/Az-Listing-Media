import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import aboutphoto from '../../assets/photos/42 E Interlacken Dr-43.jpg';
import {Link} from 'react-router-dom';

function Aboutmain() {
  return (
    <>
      {/* ABOUT US DESKTOP */}
      <div
        className='mx-auto  p-5 d-none d-md-block   '
        style={{marginTop: '20px', width: '72%'}}>
        <Row>
          <Col style={{marginTop: '30px'}}>
            <h6
              className='text-center'
              style={{letterSpacing: '10px'}}>
              A LITTLE BIT
            </h6>
            <h1
              className='text-center'
              style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
              ABOUT US
            </h1>
            <h5
              style={{
                marginTop: '45px',
                letterSpacing: '2px',
              }}>
              Our passionate and dedicated team specializes in capturing stunning visuals that
              highlight each property’s unique story. We offer breathtaking photography, engaging
              video tours, and aerial images to help your listings stand out in a competitive
              market. Collaborating closely with real estate agents, homeowners, and developers, we
              focus on creating high-quality imagery that reflects the true essence of each space.
              <br />
              <br />
              Join us in transforming properties into extraordinary visual experiences, as we strive
              to support your success in the real estate industry.
            </h5>
            <div
              className='text-center'
              style={{marginTop: '50px'}}>
              <button
                className='btn btn-dark  '
                style={{
                  borderRadius: '5px',
                  padding: '15px 35px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Link
                  to='/about'
                  target='_blank'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    letterSpacing: '1px',
                    fontSize: '18px',
                  }}>
                  LEARN MORE
                </Link>
              </button>
            </div>
          </Col>

          <img
            src={aboutphoto}
            alt='NO PHOTO YET'
            style={{
              width: '40%',
              height: '600px',
              objectFit: 'cover',
              borderRadius: '30px',
            }}
          />
        </Row>
      </div>

      {/* ABOUT US MOBILE */}
      <div className='d-block d-md-none '>
        <div
          className='bg-light '
          style={{paddingBottom: '50px'}}>
          <h6
            className='text-center'
            style={{letterSpacing: '10px'}}>
            A LITTLE BIT
          </h6>
          <h1
            className='text-center'
            style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
            ABOUT US
          </h1>

          <div
            className='container'
            style={{
              width: '80%',
            }}>
            <Row>
              <Col md={6}>
                <h5
                  style={{
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: '16px',
                    textAlign: 'justify',
                  }}>
                  Our passionate and dedicated team specializes in capturing stunning visuals that
                  highlight each property’s unique story. We offer breathtaking photography,
                  engaging video tours, and aerial images to help your listings stand out in a
                  competitive market. Collaborating closely with real estate agents, homeowners, and
                  developers, we focus on creating high-quality imagery that reflects the true
                  essence of each space. Join us in transforming properties into extraordinary
                  visual experiences, as we strive to support your success in the real estate
                  industry
                </h5>
              </Col>
              <Col
                md={6}
                className='text-center'>
                <img
                  src={aboutphoto}
                  alt='NO PHOTO YET'
                  style={{
                    width: '100%',
                    height: '100%',
                    marginTop: '20px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmain;
