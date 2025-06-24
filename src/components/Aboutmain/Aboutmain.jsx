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
        className='mx-auto d-none d-md-block'
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
              At AZ Listing Media, we don’t just deliver visuals, we become your marketing partner.
              Our passionate and dedicated team specializes in showcasing properties through
              strategic, high-impact media designed to elevate your brand and drive results. From
              captivating photography and dynamic video tours to compelling aerial imagery, we help
              your listings stand out in a competitive market. We work hand-in-hand with real estate
              agents, brokerages, and developers to craft visuals that don’t just show a space, but
              sell a lifestyle.
              <br />
              <br />
              Our goal is simple: to be an extension of your team, providing powerful marketing
              tools that reflect the true essence of each property and strengthen your position as a
              top-tier real estate professional.
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
