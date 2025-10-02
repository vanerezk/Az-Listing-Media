import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import Topbutton from '../components/Top/Topbutton';
import {Link} from 'react-router-dom';
import reelone from '../assets/videos/SocialMediaReel.mp4';
import reeltwo from '../assets/videos/SocialMediaReel2.mp4';
import floorplans from '../assets/photos/9637_E_Gold_Dust_Ave.jpg';
import photoFondo from '../assets/photos/Twilight_28556 N 124th Dr-1.png';
import photography from '../assets/photos/28556 N 124th Dr Website-1.jpg';
import aerialtrial from '../assets/photos/aerialttrial.jpg';
import aerialaddonone from '../assets/photos/1110_N_Gull_Haven_Court-144.jpg';
import upgradedronephoto from '../assets/photos/42 E Interlacken Dr-36.jpg';
import BeforeAfter from '../components/BeforeAfter/BeforeAfter';
import upgradedtwilightphoto from '../assets/photos/49903 N 26th Ave_Virtual Twilight-1.jpg';
import '../components/SocialMediaReel/SocialMediaReel.css';

function Pricings() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    upgradedronephoto,
    upgradedtwilightphoto,
    <BeforeAfter />,
    aerialaddonone,
    aerialtrial,
  ];

  return (
    <>
      <img
        src={photoFondo}
        style={{marginTop: '85px'}}
        id='backgroundphoto'
        className='w-100 mx-auto '
        alt='Community Ground Photo Example'
      />
      <div
        className='text-container d-none d-md-block'
        style={{marginTop: '100px'}}>
        <h6
          className='text-center text-white'
          style={{letterSpacing: '10px', fontSize: '30px'}}>
          CHOOSE A PLAN
        </h6>
        <h1
          className='text-center text-white'
          style={{letterSpacing: '8px', fontSize: '78px', marginBottom: '50px'}}>
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

      <div className='mx-auto w-100  text-center  d-none d-md-block'>
        {/* PHOTOGRAPHY */}
        <Card
          style={{
            width: '100%',

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
                <b style={{fontSize: '12px'}}>ALL PHOTO PACKAGES </b> INCLUDE SKY REPLACEMENT.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless '
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
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
                      <h6>0 - 1,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$249</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$299</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$349</h6>
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
                  ADDITIONAL 4,501 - 6,000 SQFT ($399), AND 6,001-8,000 SQFT ($499) PACKAGES ARE
                  ALSO AVAILABLE .
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
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
                <Card.Img
                  style={{
                    height: '450px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  src={photography}
                  alt='Community Ground Photo Example'
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* ADD ONS */}

        <Card
          style={{
            width: '100%',
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
                ADD-ONS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                BOOST YOUR PROPERTY'S <b style={{fontSize: '12px'}}>VISIBILITY</b> WITH THE
                FOLLOWING SERVICES.
              </h6>
            </Row>

            <Row className='text-CENTER mx-auto p-5'>
              <Col md={6}>
                {images[currentImage] instanceof Object ? (
                  <div
                    style={{
                      height: '460px',
                      borderRadius: '15px',
                      objectFit: 'cover',
                    }}>
                    {images[currentImage]}
                  </div>
                ) : (
                  <Card.Img
                    style={{
                      height: '460px',
                      borderRadius: '15px',
                      objectFit: 'cover',
                    }}
                    src={images[currentImage]}
                  />
                )}
              </Col>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '90%',
                    margin: 'auto',
                  }}>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    className='text-center'>
                    <td>
                      <h6>
                        <strong>ADD-ON</strong>
                      </h6>
                    </td>
                    <td>
                      <h6>
                        {' '}
                        <strong>PRICE</strong>
                      </h6>
                    </td>
                  </tr>

                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(0)}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>TWILIGHT PHOTOS</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$299</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(1)}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>VIRTUAL TWILIGHT</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$39 PER IMG</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(2)} //
                  >
                    <td>
                      <h6 style={{cursor: 'grab'}}>VIRTUAL STAGING</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$49 PER IMG</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(3)}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>AERIAL PHOTOGRAPHY</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$99 (6 - 12 PHOTOS)</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(4)}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>AERIAL PHOTOGRAPHY</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$149 (13 - 24 PHOTOS)</h6>
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
                  }}
                  className='text-center d-block'>
                  {' '}
                  ASK US FOR MORE INFORMATION ON ADD-ONS
                </p>

                <span
                  style={{color: 'GRAY', fontSize: '10px'}}
                  className='text-center d-block'>
                  *PRICES DO NOT INCLUDE TAX{' '}
                </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '15px 35px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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

        {/* SOCIAL MEDIA REEL */}

        <Card
          style={{
            width: '100%',

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
                SOCIAL MEDIA REEL
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                A DYNAMIC, VISUALLY COMPELLING MINI-TOUR DESIGNED TO SPARK INTEREST AND DRIVE
                <b style={{fontSize: '12px'}}> ENGAGEMENT </b> FOR A PROPERTY.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
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
                      <h6>0 - 2000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2001 - 4000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$399</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4001 - 6000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$449</h6>
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
                  $100 ADDITIONAL FEE FOR AGENT IN SOCIAL MEDIA REEL
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
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
                <div className='container-smartphone'>
                  <div
                    className='iphone'
                    style={{marginRight: '50px'}}>
                    <div className='notch'></div>
                    <div className='content'>
                      <video
                        loop
                        muted
                        autoPlay
                        src={reelone}
                      />
                    </div>
                  </div>
                  <div
                    className='iphonetwo'
                    style={{marginLeft: '50px', marginRight: '100px'}}>
                    <div className='notch'></div>
                    <div className='content'>
                      <video
                        loop
                        muted
                        autoPlay
                        src={reeltwo}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* HD VIDEOS */}

        <Card
          style={{
            width: '100%',

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
                A CRISP,<b style={{fontSize: '12px'}}> CINEMATIC WALKTHROUGH </b> THAT SHOWCASES A
                PROPERTY'S DESIGN, FLOW, AND ATMOSPHERE IN RICH DETAIL.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
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
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
                <Card.Img
                  style={{
                    height: '450px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  src={photoFondo}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br />
        {/* CINEMATIC VIDEO TOURS */}
        <Card
          style={{
            width: '100%',

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
                A POLISHED, <b style={{fontSize: '12px'}}> STORY-DRIVEN FILM </b> THAT ARTFULLY
                HIGHLIGHTS A PROPERTY'S UNIQUE CHARACTER, MOOD, AND LIFESTYLE APPEAL.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col>
                <iframe
                  style={{width: '100%', height: '450px', borderRadius: '15px'}}
                  src='https://www.youtube.com/embed/zEUmnZNX46o?si=wQ3SxPVWH64gprvV'
                  title='YouTube video player'
                  allow='autoplay'
                  allowfullscreen></iframe>
              </Col>

              <Col>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
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
                      <h6>$499</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$599</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$699</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'black',
                    fontSize: '12px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($499), 4,501 - 6,000 SQFT ($799), AND 6,001-8,000 SQFT ($899)
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
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
            width: '100%',

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
                AERIAL SOLUTIONS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                  width: '70%',
                  margin: 'auto',
                }}>
                STRIKING DRONE PHOTOS AND VIDEOS THAT REVEAL A{' '}
                <b style={{fontSize: '12px'}}> PROPERTY'S SURROUNDINGS</b> , SCALE, AND SETTING FROM
                A CAPTIVATING BIRD'S-EYE VIEW.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PACKAGES</strong>
                      </h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>
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
                      <h6 style={{marginRight: '30px'}}>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>24 IMAGES</h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>$249</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>AERIAL VIDEO TOUR</h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>$199</h6>
                    </td>
                  </tr>
                </table>
                <span style={{color: 'black', fontSize: '10px'}}>
                  *ADD LOT LINES AND LOCATION MARKERS TO YOUR VIDEO FOR $99
                </span>
                <br />
                <span style={{color: 'GRAY', fontSize: '10px'}}>*PRICES DO NOT INCLUDE TAX</span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '15px 35px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
                <Card.Img
                  style={{
                    height: '450px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  src={aerialtrial}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br />

        {/* FLOOR PLANS */}

        <Card
          style={{
            width: '100%',
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
                2D & 3D FLOOR PLANS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                  width: '70%',
                  margin: 'auto',
                }}>
                ACCURATE VISUAL MAPS, FLAT (2D) OR DIMENSIONAL (3D), THAT HELP BUYERS UNDERSTAND A
                PROPERTY'S LAYOUT, FLOW, AND SPATIAL POTENTIAL AT A GLANCE.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col md={6}>
                <Card.Img
                  style={{
                    height: '450px',
                    objectFit: 'contain',
                    borderRadius: '15px',
                  }}
                  src={floorplans}
                />
              </Col>
              <Col md={6}>
                <table
                  className='table table-borderless'
                  style={{
                    fontSize: '12px',
                    marginTop: '30px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PACKAGES</strong>
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
                      <h6>2D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$99</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2D +4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$150</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2D & 3D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
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
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
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
      </div>

      {/* MOBILE SITE */}

      <div
        className='d-md-none d-lg-none d-xl-none d-xxl-none'
        style={{marginBottom: '100px'}}>
        {/* PHOTOGRAPHY MOBILE */}
        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                PHOTOGRAPHY
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                <b style={{fontSize: '9px'}}>ALL PHOTO PACKAGES </b> INCLUDE SKY REPLACEMENT.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
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
                      <h6>0 - 1,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>1,501 - 2,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$249</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$299</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$349</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  ADDITIONAL 4,501 - 6,000 SQFT ($399), AND 6,001-8,000 SQFT ($499) PACKAGES ARE
                  ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* ADD ONS MOBILE */}
        <Card
          style={{
            width: '95%',
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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                ADD-ONS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                BOOST YOUR PROPERTY'S <b style={{fontSize: '9px'}}>VISIBILITY</b> WITH THE FOLLOWING
                SERVICES.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    width: '100%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>ADD ON</strong>
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
                      <h6 style={{cursor: 'grab'}}>TWILIGHT PHOTOS</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$299</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>VIRTUAL TWILIGHT</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$39 PER IMG</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>VIRTUAL STAGING</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$49 PER IMG</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>AERIAL PHOTOGRAPHY</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$99 (6 - 12 PHOTOS)</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6 style={{cursor: 'grab'}}>AERIAL PHOTOGRAPHY</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$149 (13 - 24 PHOTOS)</h6>
                    </td>
                  </tr>
                </table>
                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}
                  className='text-center d-block'>
                  {' '}
                  ASK US FOR MORE INFORMATION ON ADD-ONS
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* SOCIAL MEDIA REEL MOBILE */}
        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                SOCIAL MEDIA REEL
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                A DYNAMIC, VISUALLY COMPELLING MINI-TOUR DESIGNED TO SPARK INTEREST AND DRIVE
                <b style={{fontSize: '9px'}}> ENGAGEMENT </b> FOR A PROPERTY.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
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
                      <h6>0 - 2000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2001 - 4000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$399</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>4001 - 6000 SQ FT</h6>
                    </td>
                    <td>
                      <h6>$449</h6>
                    </td>
                  </tr>
                </table>

                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  $100 ADDITIONAL FEE FOR AGENT IN SOCIAL MEDIA REEL
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* HD VIDEOS MOBILE */}
        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                HD HOME VIDEO
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                A CRISP,<b style={{fontSize: '9px'}}> CINEMATIC WALKTHROUGH </b> THAT SHOWCASES A
                PROPERTY'S DESIGN, FLOW, AND ATMOSPHERE IN RICH DETAIL.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
                    margin: 'auto',
                  }}>
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
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($000), 4,501 - 6,000 SQFT ($000), AND 6,001-8,000 SQFT ($000)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* CINEMATIC VIDEO TOURS MOBILE */}
        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                CINEMATIC VIDEO TOURS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                A POLISHED, <b style={{fontSize: '9px'}}> STORY-DRIVEN FILM </b> THAT ARTFULLY
                HIGHLIGHTS A PROPERTY'S UNIQUE CHARACTER, MOOD, AND LIFESTYLE APPEAL.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
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
                      <h6>$499</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2,501 - 3,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$599</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3,501 - 4,500 SQFT</h6>
                    </td>
                    <td>
                      <h6>$699</h6>
                    </td>
                  </tr>
                </table>

                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  {' '}
                  UP TO 1,500 SQFT ($499), 4,501 - 6,000 SQFT ($799), AND 6,001-8,000 SQFT ($899)
                  PACKAGES ARE ALSO AVAILABLE .
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* AERIAL ONLY MOBILE */}

        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                AERIAL SOLUTIONS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                STRIKING DRONE PHOTOS AND VIDEOS THAT REVEAL A{' '}
                <b style={{fontSize: '9px'}}> PROPERTY'S SURROUNDINGS</b> , SCALE, AND SETTING FROM
                A CAPTIVATING BIRD'S-EYE VIEW.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>12 IMAGES</h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>24 IMAGES</h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>$249</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>AERIAL VIDEO TOUR</h6>
                    </td>
                    <td>
                      <h6 style={{marginRight: '30px'}}>$199</h6>
                    </td>
                  </tr>
                </table>

                <p
                  style={{
                    color: 'GRAY',
                    fontSize: '10px',
                    marginTop: '20px',
                    width: '80%',
                    margin: 'auto',
                  }}>
                  *ADD LOT LINES AND LOCATION MARKERS TO YOUR VIDEO FOR $99
                </p>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* FLOOR PLANS  MOBILE */}
        <Card
          style={{
            width: '95%',

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

                  fontSize: '20px',
                  letterSpacing: '10px',
                }}>
                2D & 3D FLOOR PLANS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '8px',
                }}>
                ACCURATE VISUAL MAPS, FLAT (2D) OR DIMENSIONAL (3D), THAT HELP BUYERS UNDERSTAND A
                PROPERTY'S LAYOUT, FLOW, AND SPATIAL POTENTIAL AT A GLANCE.
              </h6>
            </Row>

            <Row className='text-center mx-auto '>
              <Col>
                <table
                  className='table table-borderless '
                  style={{
                    marginTop: '30px',
                    width: '100%',
                    margin: 'auto',
                  }}>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>
                        <strong>PACKAGES</strong>
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
                      <h6>2D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$99</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>3D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$149</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2D +4,000 SQFT</h6>
                    </td>
                    <td>
                      <h6>$150</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>2D & 3D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
                    </td>
                  </tr>
                </table>

                <span style={{color: 'GRAY', fontSize: '8px'}}>*PRICES DO NOT INCLUDE TAX </span>
                <button
                  className='btn btn-dark d-block mx-auto '
                  style={{
                    borderRadius: '5px',
                    marginTop: '40px',
                    padding: '7px 30px',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
                  }}>
                  <Link
                    to='https://azlistingmedia.portal.realestatemediahero.com/'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      letterSpacing: '1px',
                      fontSize: '12px',
                    }}>
                    BOOK NOW
                  </Link>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <Topbutton />
    </>
  );
}

export default Pricings;
