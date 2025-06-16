import {Card, Col, Row, Carousel} from 'react-bootstrap';

import './Services.css';

import listingmedia from '../../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import aerialmedia from '../../assets/photos/4323_W_Ardmore_Rd-55.jpg';
import marketingvideos from '../../assets/photos/Marketing_Video-1.jpg';
import agentbranding from '../../assets/photos/Dining Room-1.jpg';

function Services() {
  return (
    <div
      className='mx-auto w-100 '
      style={{marginTop: '70px'}}>
      <h6
        className='text-center'
        style={{letterSpacing: '10px'}}>
        A COMPLETE REAL ESTATE
      </h6>
      <h1
        className='text-center'
        style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
        MEDIA SOLUTION
      </h1>

      <Row
        className='fourcards'
        style={{
          margin: 'auto',
          width: '70%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col className='text-center'>
          <Card
            style={{
              height: '100%',
              maxHeight: '500px',
              width: '100%',
              borderRadius: '15px 15px 15px 15px',
              marginBottom: '80px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
            }}>
            <Card.Img
              variant='top'
              src={listingmedia}
              style={{
                width: '100%',
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
                  fontSize: '25px',
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
        <Col className='text-center'>
          <Card
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '500px',
              borderRadius: '15px 15px 15px 15px',
              marginBottom: '80px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
            }}>
            <Card.Img
              variant='top'
              src={aerialmedia}
              style={{
                width: '100%',
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
                  fontSize: '25px',
                  marginBottom: '20px',
                }}>
                AERIAL MEDIA
              </Card.Title>
              <Card.Text style={{marginBottom: '20px'}}>
                Get a view from above with our licensed drone pilots.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='text-center'>
          <Card
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '500px',
              borderRadius: '15px 15px 15px 15px',
              marginBottom: '80px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
            }}>
            <Card.Img
              variant='top'
              src={marketingvideos}
              style={{
                width: '100%',
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
                  fontSize: '24px',
                  marginBottom: '20px',
                }}>
                MARKETING VIDEOS
              </Card.Title>
              <Card.Text style={{marginBottom: '20px'}}>
                Cinematic highlights, lifestyle videos and social media content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='text-center'>
          <Card
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '500px',
              borderRadius: '15px 15px 15px 15px',
              marginBottom: '80px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
            }}>
            <Card.Img
              variant='top'
              src={agentbranding}
              style={{
                width: '100%',
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
                  fontSize: '25px',
                  marginBottom: '20px',
                }}>
                AGENT BRANDING
              </Card.Title>
              <Card.Text style={{marginBottom: '20px'}}>
                Elevate your brand with our agent-focused media solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div style={{width: '80%', height: '100%', margin: 'auto'}}>
        <Carousel
          fade
          className='carouselCards'>
          <Carousel.Item>
            <Card
              style={{
                width: '100%',
                borderRadius: '15px 15px 15px 15px',
                marginBottom: '80px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={listingmedia}
                style={{
                  width: '100%',
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
                    fontSize: '25px',
                    marginBottom: '20px',
                  }}>
                  LISTING MEDIA
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Listing photos, property videos, 3D Tours, Virtual Tours and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: '100%',
                borderRadius: '15px 15px 15px 15px',
                marginBottom: '80px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={marketingvideos}
                style={{
                  width: '100%',
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
                    fontSize: '25px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                  }}>
                  MARKETING VIDEOS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Cinematic highlights, lifestyle videos, social media content, and much more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: '100%',
                borderRadius: '15px 15px 15px 15px',
                marginBottom: '80px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={agentbranding}
                style={{
                  width: '100%',
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
                    fontSize: '25px',
                    marginBottom: '20px',
                  }}>
                  AGENT BRANDING
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Elevate your brand with our agent-focused media solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card
              style={{
                width: '100%',
                borderRadius: '15px 15px 15px 15px',
                marginBottom: '80px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={aerialmedia}
                style={{
                  width: '100%',
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
                    fontSize: '25px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                  }}>
                  AERIAL SOLUTIONS
                </Card.Title>
                <Card.Text style={{marginBottom: '20px'}}>
                  Get a view from above with our licensed drone pilots.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
