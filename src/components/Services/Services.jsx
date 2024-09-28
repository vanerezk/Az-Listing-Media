import {Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import listingmedia from '../../assets/photos/Home Example-1.jpg';
import aerialmedia from '../../assets/photos/6822 W Amigo Dr_Drone-7.jpg';
import marketingvideos from '../../assets/photos/19312 W Puget Ave-29.jpg';
import virtualtour from '../../assets/photos/Dining Room-1.jpg';

function Services() {
  return (
    <div className=' mx-auto w-100 p-5 '>
      <h1
        className='text-center '
        style={{
          marginTop: '52px',
          fontSize: '28px',
          letterSpacing: '2px',
        }}>
        A COMPLETE REAL ESTATE MEDIA SOLUTION
      </h1>

      <hr
        className=' mx-auto d-none d-md-block w-25'
        id='lineaservices'
        style={{
          border: 'none',
          height: '5px',
        }}
      />
      <hr
        className=' mx-auto d-md-none w-25   '
        style={{width: '400px', marginTop: '20px', marginBottom: '20px'}}
      />

      {/*desktop*/}

      <div className=' d-flex justify-content-center '>
        <div className='d-none d-md-block'>
          <div className='services-card'>
            <Row style={{scale: '0.8'}}>
              <Col style={{paddingRight: '20px'}}>
                <Card
                  className='cardsservicesanother'
                  style={{
                    width: '23rem',
                    borderRadius: '15px 15px 15px 15px',
                    marginBottom: '80px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src={listingmedia}
                    style={{
                      width: '23rem',
                      padding: '0px',
                      borderRadius: '15px 15px 0px 0px',
                      height: '18rem',
                      objectFit: 'cover',
                    }}
                  />
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{
                        letterSpacing: '2px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                      }}>
                      LISTING MEDIA
                    </Card.Title>
                    <Card.Text style={{marginBottom: '20px'}}>
                      Listing photos, property videos, 3D Tours, Virtual Tours and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{paddingRight: '50px'}}>
                <Card
                  className='cardsservicesanother'
                  style={{
                    width: '23rem',
                    borderRadius: '15px 15px 15px 15px',
                    marginBottom: '80px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src={aerialmedia}
                    style={{
                      width: '23rem',
                      padding: '0px',
                      borderRadius: '15px 15px 0px 0px',
                      height: '18rem',
                      objectFit: 'cover',
                    }}
                  />
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{
                        letterSpacing: '2px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                      }}>
                      LISTING MEDIA
                    </Card.Title>
                    <Card.Text style={{marginBottom: '20px'}}>
                      Listing photos, property videos, 3D Tours, Virtual Tours and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{paddingRight: '50px'}}>
                <Card
                  className='cardsservicesanother'
                  style={{
                    width: '23rem',
                    borderRadius: '15px 15px 15px 15px',
                    marginBottom: '80px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src={virtualtour}
                    style={{
                      width: '23rem',
                      padding: '0px',
                      borderRadius: '15px 15px 0px 0px',
                      height: '18rem',
                      objectFit: 'cover',
                    }}
                  />
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{
                        letterSpacing: '2px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                      }}>
                      LISTING MEDIA
                    </Card.Title>
                    <Card.Text style={{marginBottom: '20px'}}>
                      Listing photos, property videos, 3D Tours, Virtual Tours and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className='cardsservicesanother'
                  style={{
                    width: '23rem',
                    borderRadius: '15px 15px 15px 15px',
                    marginBottom: '80px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src={marketingvideos}
                    style={{
                      width: '23rem',
                      padding: '0px',
                      borderRadius: '15px 15px 0px 0px',
                      height: '18rem',
                      objectFit: 'cover',
                    }}
                  />
                  <Card.Body className='text-center'>
                    <Card.Title
                      style={{
                        letterSpacing: '2px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                      }}>
                      LISTING MEDIA
                    </Card.Title>
                    <Card.Text style={{marginBottom: '20px'}}>
                      Listing photos, property videos, 3D Tours, Virtual Tours and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className='text-center d-none d-md-block '>
              <button
                className='btn btn-light  '
                style={{
                  backgroundColor: 'lightgray',
                  marginTop: '-50px',
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
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className='d-md-none'>
        <div className='d-flex justify-content-center'>
          <Carousel
            variant='dark'
            fade
            slide
            indicators={false}
            pauseOnHover
            className='w-100'>
            <Carousel.Item>
              <Card
                className='mx-auto '
                style={{
                  width: '65vw',
                  marginTop: '40px',
                  marginLeft: '28px',
                  marginBottom: '80px',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={listingmedia}
                  style={{
                    padding: '20px',
                    height: '18rem',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
                />
                <Card.Body className='text-center'>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    LISTING MEDIA
                  </Card.Title>
                  <Card.Text>
                    We capture the essence of each listing, emphasizing unique features and curb
                    appeal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='mx-auto '
                style={{
                  width: '65vw',
                  marginTop: '40px',
                  borderRadius: '15px',
                  marginLeft: '28px',
                  marginBottom: '80px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={aerialmedia}
                  style={{
                    padding: '20px',
                    height: '18rem',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
                />
                <Card.Body className='text-center'>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    AERIAL MEDIA
                  </Card.Title>
                  <Card.Text>
                    Highlight expansive landscapes, waterfront locations, and architectural details.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='mx-auto '
                style={{
                  width: '65vw',
                  borderRadius: '15px',
                  marginTop: '40px',
                  marginLeft: '28px',
                  marginBottom: '80px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={marketingvideos}
                  style={{
                    padding: '20px',
                    height: '18rem',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
                />
                <Card.Body className='text-center '>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-10px',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}>
                    MARKETING VIDEOS
                  </Card.Title>
                  <Card.Text>
                    Create dynamic video content that tells a story about each property.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className='mx-auto '
                style={{
                  width: '65vw',
                  marginTop: '40px',
                  marginLeft: '28px',
                  marginBottom: '80px',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                }}>
                <Card.Img
                  variant='top'
                  src={virtualtour}
                  style={{
                    padding: '20px',
                    height: '18rem',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
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
                  <Card.Text>
                    Create a 360-degree virtual tour of your property from any location.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div
        className='text-center d-md-none '
        style={{marginBottom: '60px'}}>
        <button
          className='btn  mx-auto '
          style={{
            borderRadius: '0px',
            backgroundColor: '#EDEDED',
            padding: '10px 30px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          }}>
          <Link
            to='https://spiro.media/'
            target='_blank'
            style={{textDecoration: 'none', color: 'black', padding: '10px'}}>
            SCHEDULE NOW
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Services;
