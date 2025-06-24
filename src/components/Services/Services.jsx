import {Card, Col, Row, Carousel} from 'react-bootstrap';

import './Services.css';

import listingMediaImage from '../../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import aerialMediaImage from '../../assets/photos/4323_W_Ardmore_Rd-55.jpg';
import marketingVideosImage from '../../assets/photos/Marketing_Video-1.jpg';
import agentBrandingImage from '../../assets/photos/Dining Room-1.jpg';

function Services() {
  return (
    <div
      className='mx-auto w-100'
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

      <Row className='fourcards'>
        <Col>
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={listingMediaImage}
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
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={marketingVideosImage}
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
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={aerialMediaImage}
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
                AERIAL SERVICES
              </Card.Title>
              <Card.Text style={{marginBottom: '20px'}}>
                Get a view from above with our licensed drone pilots.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='text-center'>
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={agentBrandingImage}
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

      <Carousel fade>
        <Carousel.Item>
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={listingMediaImage}
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
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={marketingVideosImage}
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
        </Carousel.Item>
        <Carousel.Item>
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={aerialMediaImage}
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
                AERIAL SERVICES
              </Card.Title>
              <Card.Text style={{marginBottom: '20px'}}>
                Get a view from above with our licensed drone pilots.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='servicecard'>
            <Card.Img
              variant='top'
              src={agentBrandingImage}
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
      </Carousel>
    </div>
  );
}

export default Services;
