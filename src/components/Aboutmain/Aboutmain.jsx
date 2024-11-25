import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import aboutphoto from '../../assets/photos/42 E Interlacken Dr-43.jpg';
import {Link} from 'react-router-dom';
import './Aboutmain.css';

function Aboutmain() {
  return (
    <>
      <div
        id='aboutmain'
        className='mx-auto '
        style={{marginTop: '20px', width: '80%', marginBottom: '100px', scale: '0.9'}}>
        <Row style={{marginTop: '50px'}}>
          <Col style={{marginTop: '50px'}}>
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
              className='text-justify w-75 mx-auto'
              style={{
                marginTop: '45px',
                letterSpacing: '2px',
                fontSize: '18px',
                lineHeight: '30px',
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
              className='text-center mx-auto d-flex justify-content-center'
              style={{marginTop: '50px'}}>
              <button
                className='btn btn-dark d-md-block d-none'
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
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}>
            <img
              src={aboutphoto}
              id='aboutphoto'
              alt='NO PHOTO YET'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '30px 0 30px 0px',
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Aboutmain;
