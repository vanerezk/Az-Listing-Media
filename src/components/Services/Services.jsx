import {Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import listingmedia from '../../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import aerialmedia from '../../assets/photos/2842 N Claire Dr-40.jpg';
import marketingvideos from '../../assets/photos/Marketing_Video-1.jpg';
import agentbranding from '../../assets/photos/Dining Room-1.jpg';

function Services() {
  return (
    <div className=' mx-auto w-100 p-5 '>
      <h6
        className='text-center '
        style={{letterSpacing: '10px'}}>
        A COMPLETE REAL ESTATE
      </h6>
      <h1
        className='text-center '
        style={{
          letterSpacing: '8px',
          fontSize: '50px',
          marginBottom: '50px',
        }}>
        MEDIA SOLUTION
      </h1>

      {/* <hr
        className=' mx-auto d-none d-md-block w-25'
        id='lineaservices'
        style={{
          border: 'none',
          borderRadius: '5px',
          marginBottom: '40px',
          height: '5px',
        }}
      />
      <hr
        className=' mx-auto d-md-none w-25   '
        style={{width: '400px', marginTop: '20px', marginBottom: '20px'}}
      /> */}

      {/*desktop*/}

      <div className=' d-flex justify-content-center d-none d-md-block '>
        <Row style={{scale: '0.8'}}>
          <Col style={{paddingRight: '50px'}}>
            <Card
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
          <Col style={{paddingRight: '50px'}}>
            <Card
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
          </Col>
          <Col style={{paddingRight: '50px'}}>
            <Card
              style={{
                width: '23rem',
                borderRadius: '15px 15px 15px 15px',
                marginBottom: '80px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
              }}>
              <Card.Img
                variant='top'
                src={agentbranding}
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
          <Col>
            <Card
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
          </Col>
        </Row>

        <div className='text-center d-none d-md-block '>
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
              BOOK A SHOOT
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
