import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import Topbutton from '../components/Top/Topbutton';
import {Link} from 'react-router-dom';
import firstphoto from '../assets/photos/207208 N 129th Dr-95.jpg';
import secondphoto from '../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import thirdphoto from '../assets/photos/23326 N 70th Ln-4.jpg';
import fourthphoto from '../assets/photos/2842 N Claire Dr-45.jpg';
import videography from '../assets/videos/2016 W Gloria Ln_V1.mp4';
import photoslideshow from '../assets/photos/207208 N 129th Dr-95.jpg';
import photoslideshowtwo from '../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import photoslideshowthree from '../assets/photos/Dining Room-1.jpg';
import photosslideshowfour from '../assets/photos/2842 N Claire Dr-45.jpg';
import floorplans from '../assets/photos/floorplan-with-a-garage.png';
import videopricings from '../assets/videos/V1_15323 W Campbell Ave.mp4';
import aerialtrial from '../assets/photos/aerialttrial.jpg';

import upgradedronephoto from '../assets/photos/42 E Interlacken Dr-36.jpg';
import upgradedtwilightphoto from '../assets/photos/49903 N 26th Ave_Virtual Twilight-1.jpg';
import before from '../assets/photos/2244 W Madre Del Oro Virtual Stage-1 2.jpg';
import after from '../assets/photos/2244 W Madre Del Oro Virtual Stage-2 2.jpg';
import ReactCompareImage from 'react-compare-image';

function Pricings() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [firstphoto, secondphoto, thirdphoto, fourthphoto];
  const videophotos = [photoslideshow, photoslideshowtwo, photoslideshowthree, photosslideshowfour];
  const [activeTable, setActiveTable] = useState('table1');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length, videophotos.length]);

  const handleTableToggle = (tableId) => {
    setActiveTable(tableId);
  };

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
          CHOOSE A PLAN
        </h6>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
          PRICING
        </h1>
      </div>
      <div
        className='text-container d-block d-md-none '
        style={{marginTop: '100px'}}>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
          PRICINGS
        </h1>
      </div>

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
                PHOTOGRAPHY
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                <b style={{fontSize: '12px'}}>ALL PHOTOS PACKAGES </b> INCLUDE SKY REPLACEMENT.
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
                  </tr>

                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$230</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$270</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$320</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
                      width: '200%',
                      height: '370px',
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

        {/* VIDEO WALKTHROUGHS */}

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
                VIDEO WALKTHROUGH
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                A COMPLETE, SEAMLESS, ONE-TAKE VIDEO WALKTHROUGH OF THE PROPERTY.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <Col md={6}>
                  <Card.Img
                    style={{
                      width: '200%',
                      height: '370px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    src={images[currentImage]}
                  />
                </Col>
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
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>CUSTOM</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>CUSTOM</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
            </Row>
          </Card.Body>
        </Card>

        {/* HD VIDEOS */}

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
                HD HOME VIDEO
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
                  </tr>

                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$349</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$449</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$549</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
                      width: '200%',
                      height: '370px',
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

        <br />
        {/* CINEMATIC VIDEO TOURS */}
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
                CINEMATIC VIDEO TOURS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                WE WANT TO<b style={{fontSize: '12px'}}> SHOW OFF </b> EVERY LITTLE DETAIL AND
                NUANCE OF YOUR LISTING.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <video
                  style={{
                    width: '100%',
                    height: '370px',
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
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
            </Row>
          </Card.Body>
        </Card>

        <br />

        {/* AERIAL ONLY */}

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
                AERIAL ONLY
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                RESIDENTIAL HOMES, COMMUNITIES, COMMERCIAL BUILDINGS, LANDS AND MORE!
              </h6>
            </Row>
            <button
              className='btn btn-dark  '
              style={{
                padding: '10px 15px',
                letterSpacing: '2px',
                marginRight: '10px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              }}
              data-table='table1'
              onClick={() => handleTableToggle('table1')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='white'
                viewBox='0 0 16 16'>
                <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z' />
                <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' />
              </svg>
            </button>
            <button
              className='btn btn-dark '
              style={{
                padding: '10px 15px',
                letterSpacing: '2px',

                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              }}
              data-table='table2'
              onClick={() => handleTableToggle('table2')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='white'
                viewBox='0 0 16 16'>
                <path d='M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0' />
                <path d='M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1' />
                <path d='M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
              </svg>
            </button>
            <Row className='text-center mx-auto p-5'>
              <Col
                md={6}
                id='table1'
                style={{display: activeTable === 'table1' ? 'block' : 'none'}}>
                <h4 className='text-center'> DRONE PHOTOS</h4>
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
                        <strong>PHOTOS</strong>
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
                      <h6>12 IMAGES</h6>
                    </td>
                    <td>
                      <h6>$195</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>24 IMAGES</h6>
                    </td>
                    <td>
                      <h6>$250</h6>
                    </td>
                  </tr>
                </table>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
              <Col
                md={6}
                id='table2'
                style={{display: activeTable === 'table2' ? 'block' : 'none'}}>
                <h4 className='text-center'> DRONE VIDEOS</h4>
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
                        <strong>VIDEOS</strong>
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
                      <h6>12 IMAGES</h6>
                    </td>
                    <td>
                      <h6>$195</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>24 IMAGES</h6>
                    </td>
                    <td>
                      <h6>$250</h6>
                    </td>
                  </tr>
                </table>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
                      width: '200%',
                      height: '370px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    src={aerialtrial}
                  />
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br />
        {/* TWILIGHT */}

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
                TWILIGHT PHOTOGRAPHY
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                <b style={{fontSize: '12px'}}> TRUE TWILIGHT </b> PHOTOS ARE TAKEN AT DUSK WITH
                EXTREME ATTENTION TO DETAIL. <b style={{fontSize: '12px'}}>DIGITAL TWILIGHT </b>{' '}
                PHOTOS ARE PHOTOSHOPPED.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <Col md={6}>
                  <Card.Img
                    style={{
                      width: '200%',
                      height: '370px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    src={upgradedtwilightphoto}
                  />
                </Col>
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
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$XXX</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
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
            </Row>
          </Card.Body>
        </Card>

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
