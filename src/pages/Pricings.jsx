import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ReactCompareImage from 'react-compare-image';
import {useState, useEffect} from 'react';

import {Col, Row} from 'react-bootstrap';
import Topbutton from '../components/Top/Topbutton';
import Videopricings from '../components/Videopricings/Videopricings';
import {Link} from 'react-router-dom';
import before from '../assets/photos/2244 W Madre Del Oro Virtual Stage-1 2.jpg';
import after from '../assets/photos/2244 W Madre Del Oro Virtual Stage-2 2.jpg';
import firstphoto from '../assets/photos/207208 N 129th Dr-95.jpg';
import secondphoto from '../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import thirdphoto from '../assets/photos/23326 N 70th Ln-4.jpg';
import fourthphoto from '../assets/photos/2842 N Claire Dr-45.jpg';
import upgradedronephoto from '../assets/photos/42 E Interlacken Dr-36.jpg';
import upgradedtwilightphoto from '../assets/photos/49903 N 26th Ave_Virtual Twilight-1.jpg';
import videography from '../assets/videos/2016 W Gloria Ln_V1.mp4';
import dronevideography from '../assets/photos/27247 N 78th Ln Drone-5.jpg';
import videowalkthrough from '../assets/photos/6822 W Amigo Dr-26.jpg';
import photoslideshow from '../assets/photos/207208 N 129th Dr-95.jpg';
import photoslideshowtwo from '../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import photoslideshowthree from '../assets/photos/Dining Room-1.jpg';
import photosslideshowfour from '../assets/photos/2842 N Claire Dr-45.jpg';
import floorplans from '../assets/photos/floorplan-with-a-garage.png';
import videopricings from '../assets/videos/V1_15323 W Campbell Ave.mp4';
function Pricings() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [firstphoto, secondphoto, thirdphoto, fourthphoto];
  const videophotos = [photoslideshow, photoslideshowtwo, photoslideshowthree, photosslideshowfour];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length, videophotos.length]);

  return (
    <>
      <video
        id='backgroundvideo'
        style={{width: '100%', height: '100vh', objectFit: 'cover'}}
        autoPlay
        muted
        loop>
        <source
          src={videopricings}
          type='video/mp4'
        />
      </video>
      <div
        className='text-container d-none d-md-block '
        style={{marginTop: '100px'}}>
        <h6
          className='text-center text-white'
          style={{letterSpacing: '10px'}}>
          A COMPLETE REAL ESTATE
        </h6>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
          MEDIA SOLUTION
        </h1>
      </div>

      {/*mobile view*/}
      <Videopricings />
      {/*desktop view*/}

      <div className='mx-auto w-100  text-center d-none d-md-block'>
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
                  marginTop: '70px',

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
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '20px',
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
              </Col>
              <Col md={6}>
                <Col md={6}>
                  <Card.Img
                    style={{
                      width: '250%',
                      height: '470px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    src={images[currentImage]}
                  />
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className=' bg-white  w-100 '>
          <Row className='mx-auto mt-5 p-5 w-75'>
            <h4
              style={{
                textAlign: 'center',
                marginTop: '-40px',
                marginBottom: '40px',
                fontSize: '28px',
                letterSpacing: '10px',
              }}>
              UPGRADE YOUR SHOOTS
            </h4>
            <Col>
              <Card
                style={{
                  width: '400px',
                  marginBottom: '80px',
                  margin: 'auto',
                  border: 'none',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  <Card.Img
                    variant='top'
                    src={upgradedronephoto}
                    style={{
                      padding: '20px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <span className='price-tag'>99</span>
                </div>
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
            <Col>
              <Card
                style={{
                  width: '400px',
                  marginBottom: '80px',
                  margin: 'auto',
                  border: 'none',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  <Card.Img
                    variant='top'
                    src={upgradedtwilightphoto}
                    style={{
                      padding: '20px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <span className='price-tag'>99</span>
                </div>
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
                  width: '400px',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  {' '}
                  <div className='divcomparefirst'>
                    <div
                      className='divcompare'
                      style={{padding: '18px', marginBottom: '15px'}}>
                      <ReactCompareImage
                        leftImage={before}
                        rightImage={after}
                        leftImageCss={{
                          height: '265px',
                          objectFit: 'cover',

                          borderRadius: '15px',
                        }}
                        rightImageCss={{
                          height: '265px',
                          objectFit: 'cover',

                          borderRadius: '15px',
                        }}
                      />
                    </div>
                  </div>
                  <span className='price-tag'>99</span>
                </div>

                <Card.Body className='text-center'>
                  <Card.Title
                    style={{
                      letterSpacing: '2px',
                      marginTop: '-35px',
                      fontWeight: 'bold',
                    }}>
                    ENHANCEMENTS
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
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
          </Row>
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
                <video
                  style={{
                    width: '100%',
                    height: '470px',
                    objectFit: 'cover',

                    borderRadius: '15px',
                  }}
                  autoPlay
                  loop
                  muted>
                  <source
                    src={videography}
                    type='video/mp4'
                  />
                </video>
              </Col>
              <Col md={6}>
                <table
                  className='table table-borderless mx-auto'
                  style={{
                    fontSize: '12px',
                    width: '90%',
                    textAlign: 'center',

                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PROPERTY SIZE</strong>
                      </h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>
                        <strong>PRICE</strong>
                      </h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>500 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$349</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$449</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4,001 - 5,500 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$549</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>5,501 - 7,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$649</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>7,001 - 10,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$849</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>10,000+ SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingRight: '50px'}}>$1,049</h6>
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
          </Card.Body>
        </Card>

        <div className=' bg-light  w-100 '>
          <Row className='mx-auto mt-5 p-5 w-75'>
            <h4 className='text-center mb-5'>UPGRADE YOUR SHOOTINGS</h4>
            <Col>
              <Card
                style={{
                  width: '400px',
                  marginBottom: '80px',
                  margin: 'auto',
                  border: 'none',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  <Card.Img
                    variant='top'
                    src={dronevideography}
                    style={{
                      padding: '20px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <span className='price-tag'>149</span>
                </div>
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
            <Col>
              <Card
                style={{
                  width: '400px',
                  marginBottom: '80px',
                  margin: 'auto',
                  border: 'none',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  <Card.Img
                    variant='top'
                    src={videowalkthrough}
                    style={{
                      padding: '20px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <span className='price-tag'>149</span>
                </div>
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
                  width: '400px',
                  marginBottom: '80px',
                  margin: 'auto',
                  border: 'none',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  borderRadius: '15px',
                }}
                className='mx-auto'>
                <div className='image-container'>
                  <Card.Img
                    variant='top'
                    src={videophotos[currentImage]}
                    style={{
                      padding: '20px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <span className='price-tag'>99</span>
                </div>
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
          </Row>
        </div>

        {/* FLOOR PLANS */}

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
                  marginTop: '70px',

                  fontSize: '28px',
                  letterSpacing: '10px',
                }}>
                2D FLOOR PLANS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                MADE WITH XXXX
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless mx-auto'
                  style={{
                    fontSize: '12px',
                    width: '90%',
                    textAlign: 'center',

                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PROPERTY SIZE</strong>
                      </h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>
                        <strong>PRICE</strong>
                      </h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>500 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4,001 - 5,500 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$249</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>5,501 - 7,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$309</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>7,001 - 10,000 SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$409</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>10,000+ SQFT</h6>
                    </td>
                    <td>
                      <h6 style={{paddingLeft: '20px', paddingRight: '40px'}}>$509</h6>
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
                <Col md={6}>
                  <Card.Img
                    style={{
                      width: '250%',
                      height: '470px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    src={floorplans}
                  />
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* AERIAL
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
        </Card> */}
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
