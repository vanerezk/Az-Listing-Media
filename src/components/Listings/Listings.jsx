import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import {useNavigate} from 'react-router-dom';
import photographyphoto from '../../assets/photos/6822 W Amigo Dr-26.jpg';
import aerialphoto from '../../assets/photos/17655 W Model Creek Rd-6.jpg';
import videographyphoto from '../../assets/photos/42 E Interlacken Dr-36.jpg';
import virtualtourphoto from '../../assets/photos/19312 W Puget Ave-51.jpg';
import floorplansphoto from '../../assets/photos/floorplan-with-a-garage.png';

function Listings() {
  const navigate = useNavigate();
  const navigateToSection = () => {
    navigate('/pricings');
    setTimeout(() => {
      const videographySection = document.getElementById('videography');
      if (videographySection) {
        videographySection.scrollIntoView({behavior: 'smooth'});
      }
    }, 100);
  };

  return (
    <>
      <div className='bg-light  mx-auto w-100'>
        <div
          className=' w-100 d-none d-md-block '
          style={{scale: '0.7'}}>
          <div style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <Row
              style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Col
                xs={12}
                sm={6}
                md={4}
                className='text-center p-5'>
                <h1 style={{marginTop: '70px', letterSpacing: '10px', fontSize: '40px'}}>
                  LISTING SERVICES
                </h1>
                <h5>We offer a variety of different services depending on your listing needs.</h5>
                <div className='text-center'>
                  <button
                    className='btn btn-light mx-auto'
                    style={{
                      borderRadius: '0px',
                      backgroundColor: '#EDEDED',
                      padding: '10px 30px',
                      marginTop: '35px',
                      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                    }}>
                    <Link
                      to='https://spiro.media/'
                      target='_blank'
                      style={{textDecoration: 'none', color: 'black'}}>
                      SCHEDULE NOW
                    </Link>
                  </button>
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}>
                <Card
                  className='cardsservices'
                  style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)'}}>
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{letterSpacing: '2px', fontWeight: 'bold', marginTop: '20px'}}>
                      PHOTOGRAPHY
                    </Card.Title>
                    <Card.Img
                      variant='top'
                      src={photographyphoto}
                      className='mx-auto'
                      style={{height: '350px', width: '100%', objectFit: 'cover', padding: '20px'}}
                    />
                    <Card.Text
                      className='text-center mx-auto w-75'
                      style={{marginBottom: '10px'}}>
                      High-quality photos that showcase properties’ best features.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}>
                <Card
                  className='cardsservices'
                  style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)'}}>
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{letterSpacing: '2px', fontWeight: 'bold', marginTop: '20px'}}>
                      AERIAL
                    </Card.Title>
                    <Card.Img
                      variant='top'
                      src={aerialphoto}
                      className='mx-auto'
                      style={{height: '350px', width: '100%', objectFit: 'cover', padding: '20px'}}
                    />
                    <Card.Text
                      className='text-center mx-auto w-75'
                      style={{marginBottom: '10px'}}>
                      Aerial media to capture unique perspectives of properties.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
              }}>
              <Col
                xs={12}
                sm={6}
                md={4}
                className='text-center'>
                <Card
                  className='cardsservices'
                  style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)'}}
                  onClick={navigateToSection}>
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{letterSpacing: '2px', fontWeight: 'bold', marginTop: '20px'}}>
                      VIDEOGRAPHY
                    </Card.Title>
                    <Card.Img
                      variant='top'
                      src={videographyphoto}
                      className='mx-auto'
                      style={{height: '350px', width: '100%', objectFit: 'cover', padding: '20px'}}
                    />
                    <Card.Text
                      className='text-center mx-auto w-75'
                      style={{marginBottom: '10px'}}>
                      Dynamic videos and content that tells a property’s story.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className='text-center'>
                <Card
                  className='cardsservices'
                  style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)'}}>
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{letterSpacing: '2px', fontWeight: 'bold', marginTop: '20px'}}>
                      VIRTUAL TOURS
                    </Card.Title>
                    <Card.Img
                      src={virtualtourphoto}
                      className='mx-auto'
                      style={{
                        height: '350px',
                        width: '100%',
                        objectFit: 'cover',
                        padding: '20px',
                      }}
                    />
                    <Card.Text
                      className='text-center mx-auto w-75 '
                      style={{marginBottom: '10px'}}>
                      Virtual 360-degrees tours that tell a property’s story.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className='text-center'>
                <Card
                  className='cardsservices'
                  style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)'}}>
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{letterSpacing: '2px', fontWeight: 'bold', marginTop: '20px'}}>
                      2D FLOOR PLANS
                    </Card.Title>
                    <Card.Img
                      variant='top'
                      src={floorplansphoto}
                      className='mx-auto'
                      style={{
                        height: '350px',
                        width: '100%',
                        objectFit: 'cover',
                        padding: '20px',
                      }}
                    />
                    <Card.Text
                      className='text-center mx-auto w-75'
                      style={{marginBottom: '10px'}}>
                      Clear, visual representations of property layouts and blueprints.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Services mobile */}

      <div className='d-md-none'>
        <div className='text-center'>
          <h1 style={{marginTop: '70px', letterSpacing: '10px', fontSize: '40px'}}>
            LISTING SERVICES
          </h1>
          <h5>We offer a variety of different services depending on your listing needs.</h5>
        </div>
        <div
          className='d-md-none  d-flex justify-content-center '
          style={{width: '100%'}}>
          <Carousel
            indicators={false}
            variant='dark'
            slide={false}
            style={{width: '90%'}}>
            <Carousel.Item>
              <Card
                style={{
                  width: '18rem',
                  marginTop: '40px',
                  marginLeft: '50px',
                  marginBottom: '80px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={photographyphoto}
                  style={{padding: '20px', width: '18rem', height: '18rem', objectFit: 'cover'}}
                />
                <Card.Body className='text-center'>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    PHOTOGRAPHY
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='categorycarousel'
                style={{
                  width: '18rem',
                  marginTop: '40px',
                  marginBottom: '80px',
                  marginLeft: '50px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={aerialphoto}
                  style={{padding: '20px', width: '18rem', height: '18rem', objectFit: 'cover'}}
                />
                <Card.Body className='text-center'>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    AERIAL
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='#categorycarousel'
                style={{
                  width: '18rem',
                  marginTop: '40px',
                  marginBottom: '80px',
                  marginLeft: '50px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={videographyphoto}
                  style={{padding: '20px', width: '18rem', height: '18rem', objectFit: 'cover'}}
                />
                <Card.Body className='text-center '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    VIDEOGRAPHY
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='#categorycarousel'
                style={{
                  width: '18rem',
                  marginTop: '40px',
                  marginBottom: '80px',
                  marginLeft: '50px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={virtualtourphoto}
                  style={{padding: '20px', width: '18rem', height: '18rem', objectFit: 'cover'}}
                />
                <Card.Body className='text-center '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    360 VIRTUAL TOURS
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='#categorycarousel'
                style={{
                  width: '18rem',
                  marginTop: '40px',
                  marginBottom: '80px',
                  marginLeft: '50px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={floorplansphoto}
                  style={{padding: '20px', width: '18rem', height: '18rem', objectFit: 'cover'}}
                />
                <Card.Body className='text-center '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    2D FLOOR PLANS
                  </Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='text-center'>
          <button
            className='btn btn-light mx-auto'
            style={{
              borderRadius: '0px',
              backgroundColor: '#EDEDED',
              padding: '10px 30px',

              marginBottom: '100px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            }}>
            <Link
              to='https://spiro.media/'
              target='_blank'
              style={{textDecoration: 'none', color: 'black'}}>
              SCHEDULE NOW
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Listings;
