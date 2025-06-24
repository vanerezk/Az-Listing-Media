import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import photographyphoto from '../../assets/photos/23555 N 159th Ave-3.jpg';
import aerialphoto from '../../assets/photos/21887 N 181st Ave_Drone-8.jpg';
import videographyphoto from '../../assets/photos/19312 W Puget Ave-77.jpg';
import virtualtourphoto from '../../assets/photos/19312 W Puget Ave-51.jpg';
import floorplansphoto from '../../assets/photos/9637_E_Gold_Dust_Ave.jpg';
import Carousel from 'react-bootstrap/Carousel';

import './Listings.css';

function Listings() {
  return (
    <>
      <div
        id='listings'
        className='bg-light  '>
        <div
          className=' mx-auto p-5   '
          style={{width: '85%', scale: '0.85'}}>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={4}>
              <div
                className='text-center'
                style={{marginTop: '100px'}}>
                <h6 style={{letterSpacing: '10px'}}>EXPLORE OUR</h6>
                <h1 style={{letterSpacing: '8px', fontSize: '50px'}}>SERVICES</h1>
              </div>

              <div
                className=' text-center d-none d-md-block '
                style={{marginTop: '50px'}}>
                <button
                  className='btn btn-dark  '
                  style={{
                    borderRadius: '5px',
                    padding: '15px 35px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://spiro.media/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '18px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}>
              <Card
                style={{
                  width: 'auto',
                  height: '26rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={photographyphoto}
                  style={{
                    width: 'auto',
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '15rem',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body className='text-center my-auto mt-3 '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      fontWeight: 'bold',
                      fontSize: '23px',
                    }}>
                    PHOTOGRAPHY
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Crisp, professionally composed images that highlight your property’s best
                    details.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}>
              <Card
                style={{
                  width: 'auto',
                  height: '26rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={aerialphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '15rem',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body className='text-center my-auto mt-3 '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      fontWeight: 'bold',
                      fontSize: '23px',
                    }}>
                    AERIAL SOLUTIONS
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    A bird’s-eye perspective that highlights not just the property, but its stunning
                    surroundings. Perfect for showcasing landscapes, location, and curb appeal in
                    one shot.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{marginTop: '25px'}}>
            <Col
              xs={12}
              sm={6}
              md={4}
              className='text-center'>
              <Card
                style={{
                  width: 'auto',
                  height: '25rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={videographyphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '15rem',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body className='text-center my-auto mt-3 '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      fontWeight: 'bold',
                      fontSize: '23px',
                    }}>
                    VIDEO PRODUCTION
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Bring your listing to life with cinematic visuals that tell a story and leave a
                    lasting impression.
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
                style={{
                  width: 'auto',
                  height: '25rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={virtualtourphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '15rem',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body className='text-center my-auto mt-3 '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      fontWeight: 'bold',
                      fontSize: '23px',
                    }}>
                    AGENT BRANDING
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Custom media tailored to you - highlight your personality, process, and
                    professionalism to stand out in the market.
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
                style={{
                  width: 'auto',
                  height: '25rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={floorplansphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '15rem',
                    objectFit: 'contain',
                  }}
                />
                <Card.Body className='text-center my-auto mt-3 '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      fontWeight: 'bold',
                      fontSize: '23px',
                    }}>
                    FLOOR PLANS
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Clean, easy-to-read layouts that give buyers a clear understanding of the home’s
                    flow and dimensions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Mobile layout */}
      <div
        id='listingsmobile'
        className='bg-light pt-5 pb-5 '>
        <h6
          className='text-center '
          style={{letterSpacing: '10px'}}>
          EXPLORE OUR
        </h6>
        <h1
          className='text-center'
          style={{letterSpacing: '8px', fontSize: '50px'}}>
          SERVICES
        </h1>

        <Carousel
          ssr={true}
          infinite={true}
          autoPlay={false}
          fade={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          indicators={false}
          className=' mt-5 '>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '28rem',
                borderRadius: '15px 15px 15px 15px',
              }}>
              <Card.Img
                variant='top'
                src={photographyphoto}
                style={{
                  width: 'auto',
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '19rem',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className='text-center'>
                <Card.Title
                  style={{
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    fontSize: '23px',
                  }}>
                  PHOTOGRAPHY
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Crisp, professionally composed images that highlight your property’s best details.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '28rem',
                borderRadius: '15px 15px 15px 15px',
              }}>
              <Card.Img
                variant='top'
                src={aerialphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '19rem',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className='text-center'>
                <Card.Title
                  style={{
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    fontSize: '23px',
                  }}>
                  AERIAL SOLUTIONS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  A bird’s-eye perspective that highlights not just the property, but its stunning
                  surroundings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '28rem',
                borderRadius: '15px 15px 15px 15px',
              }}>
              <Card.Img
                variant='top'
                src={videographyphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '19rem',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className='text-center'>
                <Card.Title
                  style={{
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    fontSize: '23px',
                  }}>
                  VIDEO PRODUCTION
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Bring your listing to life with cinematic visuals that tell a story and leave a
                  lasting impression.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '28rem',
                borderRadius: '15px 15px 15px 15px',
              }}>
              <Card.Img
                variant='top'
                src={virtualtourphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '19rem',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className='text-center'>
                <Card.Title
                  style={{
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    fontSize: '23px',
                  }}>
                  AGENT BRANDING
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Custom media showcasing your personality and professionalism to stand out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',

                height: '28rem',
                borderRadius: '15px 15px 15px 15px',
              }}>
              <Card.Img
                variant='top'
                src={floorplansphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '19rem',
                  objectFit: 'cover',
                }}
              />
              <Card.Body className='text-center'>
                <Card.Title
                  style={{
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    fontSize: '23px',
                  }}>
                  FLOOR PLANS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Clean, easy-to-read layouts that give buyers a clear understanding of the home’s
                  flow and dimensions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default Listings;
