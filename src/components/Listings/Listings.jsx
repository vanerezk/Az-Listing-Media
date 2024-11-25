import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import photographyphoto from '../../assets/photos/23555 N 159th Ave-3.jpg';
import aerialphoto from '../../assets/photos/21887 N 181st Ave_Drone-8.jpg';
import videographyphoto from '../../assets/photos/19312 W Puget Ave-77.jpg';
import virtualtourphoto from '../../assets/photos/19312 W Puget Ave-51.jpg';
import floorplansphoto from '../../assets/photos/floorplan-with-a-garage.png';
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
          style={{width: '75%', scale: '0.95'}}>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={4}>
              <div className='text-left '>
                <h6
                  className='text-left'
                  style={{letterSpacing: '10px'}}>
                  EXPLORE OUR
                </h6>
                <h1
                  className='text-left'
                  style={{letterSpacing: '8px', fontSize: '50px'}}>
                  LISTING SERVICES
                </h1>
                <h5 style={{width: '95%'}}>
                  We offer a multi-faceted range of different services depending on your listing
                  needs.
                </h5>
              </div>

              <div
                className='text-left d-none d-md-block '
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
                  height: '24rem',
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
                    height: '16rem',
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
                style={{
                  width: 'auto',
                  height: '24rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={aerialphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '16rem',
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
                    AERIAL
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Aerial media for your property to showcase your property’s best features.
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
                  height: '24rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={videographyphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '16rem',
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
                    VIDEOGRAPHY
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Dynamic video content to make your property stand out and be noticed.
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
                  height: '24rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={virtualtourphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '16rem',
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
                    VIRTUAL TOURS
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Virtual 360-degrees tours that show and tell a story of your property.
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
                  height: '24rem',
                  borderRadius: '15px 15px 15px 15px',

                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={floorplansphoto}
                  style={{
                    padding: '0px',
                    borderRadius: '15px 15px 0px 0px',
                    height: '16rem',
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
                    2D FLOOR PLANS
                  </Card.Title>
                  <Card.Text style={{marginBottom: '20px'}}>
                    Clear, visual representations of your property layouts and blueprints.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Mobile layout */}
      <div id='listingsmobile'>
        <div className='mt-5'>
          <h6
            className='text-center'
            style={{letterSpacing: '10px'}}>
            EXPLORE OUR
          </h6>
          <h1
            className='text-center'
            style={{letterSpacing: '8px', fontSize: '50px'}}>
            LISTING SERVICES
          </h1>
        </div>

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
          className='w-75 mx-auto mt-5'>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '23.5rem',
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
                  height: '16rem',
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
                  High-quality photos that showcase properties’ best features.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '23.5rem',
                borderRadius: '15px 15px 15px 15px',

                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={aerialphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '16rem',
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
                  AERIAL
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Aerial media for your property to showcase your property’s best features.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '23.5rem',
                borderRadius: '15px 15px 15px 15px',

                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={videographyphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '16rem',
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
                  VIDEOGRAPHY
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Dynamic video content to make your property stand out and be noticed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '23.5rem',
                borderRadius: '15px 15px 15px 15px',

                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={virtualtourphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '16rem',
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
                  VIRTUAL TOURS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Virtual 360-degrees tours that show and tell a story of your property.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: 'auto',
                height: '23.5rem',
                borderRadius: '15px 15px 15px 15px',

                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={floorplansphoto}
                style={{
                  padding: '0px',
                  borderRadius: '15px 15px 0px 0px',
                  height: '16rem',
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
                  2D FLOOR PLANS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Clear, visual representations of your property layouts and blueprints.
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
