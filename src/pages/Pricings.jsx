import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import {Col, Row} from 'react-bootstrap';
import Topbutton from '../components/Top/Topbutton';
import {useState} from 'react';

import Videopricings from '../components/Videopricings/Videopricings';
import {Link} from 'react-router-dom';

function Pricings() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      id: 0,
      src: '../../src/assets/photos/207208 N 129th Dr-145.jpg',
      alt: 'Drone Photography',
    },
    {
      id: 1,
      src: '../../src/assets/photos/207208 N 129th Dr-90.jpg',
      alt: 'Twilight exterior photography',
    },
    {
      id: 2,
      src: '../../src/assets/photos/6822 W Amigo Dr-26.jpg',
      alt: 'Video walkthrough',
    },
    {
      id: 3,
      src: '../../src/assets/photos/27247 N 78th Ln Drone-5.jpg',
      alt: 'Drone video',
    },
    {
      id: 4,
      src: '../../src/assets/photos/207208 N 129th Dr-98.jpg',
      alt: 'Photo slideshow',
    },
  ];

  return (
    <>
      <video
        id='backgroundvideo'
        style={{
          width: '100%',
          height: '75vh',
          objectFit: 'cover',
          zIndex: '-1',
          marginTop: '100px',
        }}
        autoPlay
        muted
        loop
        className='d-none d-md-block'>
        <source
          src='./src/assets/videos/V1_15323 W Campbell Ave.mp4'
          type='video/mp4'
        />
      </video>

      <div className='text-container d-none d-md-block'>
        <h1
          className=' text-white'
          style={{letterSpacing: '10px', fontSize: '40px', fontWeight: 'bold'}}>
          LISTING SERVICES
        </h1>
      </div>

      {/*mobile view*/}
      <Videopricings />
      {/*desktop view*/}

      <div className='mx-auto w-100 p-5 text-center d-none d-md-block'>
        {/* PHOTOGRAPHY */}
        <Card
          style={{
            width: '70%',

            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row style={{textAlign: 'center', marginBottom: '20px'}}>
              <Card.Title
                style={{
                  textAlign: 'center',

                  fontSize: '28px',
                  letterSpacing: '10px',
                }}>
                LISTING PHOTOS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                SHOT WITH A CAMERA, THIS IS BEST USED TO PORTRAY THE SPACE AND DETAILS OF THE HOME.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',

                    width: '90%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PROPERTY SIZE</strong>
                      </h6>
                    </td>
                    <td>
                      <h6>
                        {' '}
                        <strong>PRICE</strong>
                      </h6>
                    </td>
                    <td>
                      <h6>
                        {' '}
                        <strong>PHOTOS</strong>
                      </h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>500 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
                    </td>
                    <td>
                      <h6>15-29 IMAGES</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$299</h6>
                    </td>
                    <td>
                      <h6>30-40 IMAGES</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4,001 - 5,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$399</h6>
                    </td>
                    <td>
                      <h6>45-55 IMAGES</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>5,501 - 7,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$499</h6>
                    </td>
                    <td>
                      <h6>60-70 IMAGES</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>7,001 - 10,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$599</h6>
                    </td>
                    <td>
                      <h6>75-90 IMAGES</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>10,000+ SQFT</h6>
                    </td>
                    <td>
                      <h6>$699</h6>
                    </td>
                    <td>
                      <h6>100+ IMAGES</h6>
                    </td>
                  </tr>
                </table>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-light d-none d-md-block mx-auto'
                  style={{
                    marginTop: '40px',
                    borderRadius: '0px',
                    padding: '10px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  }}>
                  <Link
                    to='https://spiro.media/'
                    target='_blank'
                    style={{textDecoration: 'none', color: 'black', letterSpacing: '2px'}}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
              <Col md={6}>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '470px',
                    objectFit: 'cover',

                    borderRadius: '15px',
                  }}
                  src='../../src/assets/photos/207208 N 129th Dr-90.jpg'
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className='text-center mx-auto p-5 bg-light '>
          <h4>UPGRADE YOUR SHOOTINGS</h4>

          <div className=' d-flex justify-content-center mx-auto '>
            <Row style={{scale: '0.8'}}>
              <Col style={{paddingRight: '50px'}}>
                <Card
                  style={{
                    borderRadius: '15px',

                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src='./src/assets/photos/6822 W Amigo Dr_Drone-7.jpg'
                    style={{
                      padding: '20px',

                      height: '19rem',
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
                      AERIAL PHOTOGRAPHY
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{paddingRight: '50px'}}>
                <Card
                  style={{
                    borderRadius: '15px',

                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src='./src/assets/photos/19312 W Puget Ave-29.jpg'
                    style={{
                      padding: '20px',
                      height: '19rem',
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
                      TWILIGHT PHOTOGRAPHY
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    borderRadius: '15px',

                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Card.Img
                    variant='top'
                    src='./src/assets/photos/19312 W Puget Ave-29.jpg'
                    style={{
                      padding: '20px',
                      height: '19rem',
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
                      ENHANCEMENTS
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div
            className='text-center d-none d-md-block '
            style={{marginBottom: '40px', marginTop: '40px'}}>
            <button
              className='btn  mx-auto '
              style={{
                borderRadius: '0px',

                backgroundColor: '#EDEDED',
                padding: '10px 30px',
                letterSpacing: '2px',
                fontWeight: 'bold',
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

        <br />
        {/* VIDEOGRAPHY */}
        <Card
          style={{
            width: '70%',

            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row style={{textAlign: 'center', marginBottom: '20px'}}>
              <Card.Title
                style={{
                  textAlign: 'center',

                  fontSize: '28px',
                  letterSpacing: '10px',
                }}>
                VIDEOGRAPHY
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                SHOT WITH A CAMERA, THIS IS BEST USED TO PORTRAY THE SPACE AND DETAILS OF THE HOME.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '470px',
                    objectFit: 'cover',

                    borderRadius: '15px',
                  }}
                  src='../../src/assets/photos/207208 N 129th Dr-90.jpg'
                />
              </Col>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',

                    width: '90%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PROPERTY SIZE</strong>
                      </h6>
                    </td>
                    <td>
                      <h6>
                        {' '}
                        <strong>PRICE</strong>
                      </h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>500 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$349</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$449</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4,001 - 5,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$549</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>5,501 - 7,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$649</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>7,001 - 10,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$849</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>10,000+ SQFT</h6>
                    </td>
                    <td>
                      <h6>$1,049</h6>
                    </td>
                  </tr>
                </table>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-light d-none d-md-block mx-auto'
                  style={{
                    marginTop: '40px',
                    borderRadius: '0px',
                    padding: '10px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  }}>
                  <Link
                    to='https://spiro.media/'
                    target='_blank'
                    style={{textDecoration: 'none', color: 'black', letterSpacing: '2px'}}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
            <Row>
              <h4>UPGRADE YOUR SHOOTINGS</h4>
            </Row>
            <Row>
              <div className=' d-flex justify-content-center '>
                <div className='d-none d-md-block'>
                  <div>
                    <Row style={{scale: '0.9'}}>
                      <Col style={{paddingRight: '50px'}}>
                        <Card
                          style={{
                            marginTop: '40px',
                            borderRadius: '15px',
                            marginBottom: '80px',
                            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                          }}>
                          <Card.Img
                            variant='top'
                            src='../../src/assets/photos/27247 N 78th Ln Drone-5.jpg'
                            style={{
                              padding: '20px',

                              height: '19rem',
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
                              DRONE VIDEO
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col style={{paddingRight: '50px'}}>
                        <Card
                          style={{
                            marginTop: '40px',
                            borderRadius: '15px',
                            marginBottom: '80px',
                            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                          }}>
                          <Card.Img
                            variant='top'
                            src='../../src/assets/photos/6822 W Amigo Dr-26.jpg'
                            style={{
                              padding: '20px',
                              height: '19rem',
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
                              VIDEO WALKTROUGH
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          style={{
                            marginTop: '40px',
                            borderRadius: '15px',
                            marginBottom: '80px',
                            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                          }}>
                          <Card.Img
                            variant='top'
                            src='./src/assets/photos/19312 W Puget Ave-29.jpg'
                            style={{
                              padding: '20px',
                              height: '19rem',
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
                              PHOTO SLIDESHOW
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <div
                      className='text-center d-none d-md-block '
                      style={{marginBottom: '60px'}}>
                      <button
                        className='btn  mx-auto '
                        style={{
                          borderRadius: '0px',
                          backgroundColor: '#EDEDED',
                          padding: '10px 30px',
                          letterSpacing: '2px',
                          fontWeight: 'bold',
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
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>

        {/* AERIAL */}
        <Card
          style={{
            width: '70%',
            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Img
                  variant='top'
                  style={{maxHeight: '400px', objectFit: 'cover', maxWidth: '600px'}}
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                />
              </Col>
              <Col md={6}>
                <Card.Title style={{textAlign: 'center', marginBottom: '40px'}}>ADD ONS</Card.Title>
                <Accordion
                  style={{width: '80%', margin: 'auto', maxWidth: '100%'}}
                  flush>
                  <Accordion.Item
                    eventKey='0'
                    onClick={() => setCurrentImageIndex(0)}>
                    <Accordion.Header>DRONE PHOTOGRAPHY</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      - BUNDLE WITH ANY PACKAGE $99 | 10 IMAGES <br /> - WITHOUT PACKAGE $199 | 10
                      IMAGES
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey='1'
                    onClick={() => setCurrentImageIndex(1)}>
                    <Accordion.Header>TWILIGHT EXTERIOR PHOTOGRAPHY</Accordion.Header>
                    <Accordion.Body> $199 | 7-10 TWILIGHT PHOTOS </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey='2'
                    onClick={() => setCurrentImageIndex(2)}>
                    <Accordion.Header>VIDEO WALKTHROUGH</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      A complete, seamless, one take video walktrough of the property. Shot on a
                      phone, this is best used for grabbing attention/vertical social media reels. |
                      $149
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey='3'
                    onClick={() => setCurrentImageIndex(3)}>
                    <Accordion.Header>DRONE VIDEO</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      - BUNDLE WITH ANY PACKAGE $149 <br />- WITHOUT PACKAGE $299
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey='4'
                    onClick={() => setCurrentImageIndex(4)}>
                    <Accordion.Header>PHOTO SLIDESHOW </Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      A slideshow with photos of the property, including music + simple transitions
                      between each photo. | $99
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      {/* MOBILE */}
      <div
        className='mx-auto w-100 p-5 text-center d-md-none'
        style={{zIndex: '-1'}}>
        {/* PHOTOGRAPHY */}
        <Card
          style={{
            width: '100%',
            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row>
              <Col md={12}>
                <Card.Title style={{textAlign: 'center', marginBottom: '40px', fontWeight: 'bold'}}>
                  PHOTOGRAPHY
                </Card.Title>
              </Col>
              <Col md={6}>
                <Accordion
                  style={{margin: 'auto', maxWidth: '100%'}}
                  flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>500 - 2,500 SQFT</Accordion.Header>
                    <Accordion.Body> $199 | 15-29 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>2,501 - 4,000 SQFT</Accordion.Header>
                    <Accordion.Body> $299 | 30-40 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>4,001 - 5,500 SQFT</Accordion.Header>
                    <Accordion.Body> $399 | 45-55 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>5,501 - 7,000 SQFT </Accordion.Header>
                    <Accordion.Body> $499 | 60-70 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>7,001 - 10,000 SQFT </Accordion.Header>
                    <Accordion.Body> $599 | 75-90 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>10,000+ SQFT</Accordion.Header>
                    <Accordion.Body> $699 | 100+ IMAGES</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <button
          className='btn btn-light mx-auto d-md-none '
          style={{
            borderRadius: '0px',
            backgroundColor: '#EDEDED',
            padding: '10px 30px',
            marginTop: '35px',
            marginBottom: '50px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          }}>
          <Link
            to='https://spiro.media/'
            target='_blank'
            style={{textDecoration: 'none', color: 'black'}}>
            SCHEDULE NOW
          </Link>
        </button>

        <hr />
        {/* VIDEOGRAPHY */}
        <Card
          style={{
            width: '100%',
            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row>
              <Col md={12}>
                <Card.Title style={{textAlign: 'center', marginBottom: '40px'}}>
                  VIDEOGRAPHY
                </Card.Title>
              </Col>
              <Col md={6}>
                <Accordion
                  style={{margin: 'auto', maxWidth: '100%'}}
                  flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>500 - 2,500 SQFT</Accordion.Header>
                    <Accordion.Body> $199 | 15-29 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>2,501 - 4,000 SQFT</Accordion.Header>
                    <Accordion.Body> $299 | 30-40 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>4,001 - 5,500 SQFT</Accordion.Header>
                    <Accordion.Body> $399 | 45-55 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>5,501 - 7,000 SQFT </Accordion.Header>
                    <Accordion.Body> $499 | 60-70 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>7,001 - 10,000 SQFT </Accordion.Header>
                    <Accordion.Body> $599 | 75-90 IMAGES</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>10,000+ SQFT</Accordion.Header>
                    <Accordion.Body> $699 | 100+ IMAGES</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <button
          className='btn btn-light mx-auto d-md-none '
          style={{
            borderRadius: '0px',
            backgroundColor: '#EDEDED',
            padding: '10px 30px',
            marginTop: '35px',
            marginBottom: '50px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          }}>
          <Link
            to='https://spiro.media/'
            target='_blank'
            style={{textDecoration: 'none', color: 'black'}}>
            SCHEDULE NOW
          </Link>
        </button>
        <hr />
        {/* AERIAL */}
        <Card
          style={{
            width: '100%',
            marginBottom: '80px',
            margin: 'auto',
            border: 'none',
          }}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title style={{textAlign: 'center', marginBottom: '40px'}}>ADD ONS</Card.Title>
              </Col>
              <Col md={6}>
                <Accordion
                  style={{margin: 'auto', maxWidth: '100%'}}
                  flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>DRONE PHOTOGRAPHY</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      - BUNDLE WITH ANY PACKAGE $99 | 10 IMAGES <br /> - WITHOUT PACKAGE $199 | 10
                      IMAGES
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>TWILIGHT EXTERIOR PHOTOGRAPHY</Accordion.Header>
                    <Accordion.Body> $199 | 7-10 TWILIGHT PHOTOS </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>VIDEO WALKTHROUGH</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      A complete, seamless, one take video walktrough of the property. Shot on a
                      phone, this is best used for grabbing attention/vertical social media reels. |
                      $149
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>DRONE VIDEO</Accordion.Header>
                    <Accordion.Body style={{textAlign: 'left'}}>
                      {' '}
                      - BUNDLE WITH ANY PACKAGE $149 <br />- WITHOUT PACKAGE $299
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>PHOTO SLIDESHOW </Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      A slideshow with photos of the property, including music + simple transitions
                      between each photo. | $99
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <hr />
        <button
          className='btn btn-light mx-auto d-md-none '
          style={{
            borderRadius: '0px',
            backgroundColor: '#EDEDED',
            padding: '10px 30px',
            marginTop: '35px',
            marginBottom: '50px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          }}>
          <Link
            to='https://spiro.media/'
            target='_blank'
            style={{textDecoration: 'none', color: 'black'}}>
            SCHEDULE NOW
          </Link>
        </button>
        <button
          className='btn btn-light mx-auto d-none d-md-block '
          style={{
            borderRadius: '0px',
            backgroundColor: '#EDEDED',
            padding: '10px 30px',
            marginTop: '35px',
            marginBottom: '50px',
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

      <Topbutton />
    </>
  );
}

export default Pricings;
