import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import Topbutton from '../components/Top/Topbutton';
import {Link} from 'react-router-dom';
import videography from '../assets/videos/2016 W Gloria Ln_V1.mp4';
import floorplans from '../assets/photos/9637_E_Gold_Dust_Ave.jpg';
import photoFondo from '../assets/photos/4131_E_Maya_Way_VT-2.jpg';
import aerialtrial from '../assets/photos/aerialttrial.jpg';
import aerialaddonone from '../assets/photos/1110_N_Gull_Haven_Court-144.jpg';
import upgradedronephoto from '../assets/photos/42 E Interlacken Dr-36.jpg';
import BeforeAfter from '../components/BeforeAfter/BeforeAfter';
import upgradedtwilightphoto from '../assets/photos/49903 N 26th Ave_Virtual Twilight-1.jpg';

function Pricings() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    upgradedronephoto,
    upgradedtwilightphoto,
    <BeforeAfter />,
    aerialaddonone,
    aerialtrial,
  ];

  const [activeTable, setActiveTable] = useState('table1');

  const handleTableToggle = (tableId) => {
    setActiveTable(tableId);
  };

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
                <Card.Img
                  style={{
                    height: '450px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  src={photoFondo}
                  alt='Community Ground Photo Example'
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* ADD ONS */}

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
                ADD-ONS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                BOOST YOUR PROPERTY'S VISIBILITY WITH THE FOLLOWING SERVICES
              </h6>
            </Row>

            <Row className='text-left mx-auto p-5'>
              <Col md={6}>
                <Col md={6}>
                  {images[currentImage] instanceof Object ? (
                    <div
                      style={{
                        width: '200%',
                        height: '370px',
                        borderRadius: '15px',
                        objectFit: 'cover',
                      }}>
                      {images[currentImage]}
                    </div>
                  ) : (
                    <Card.Img
                      style={{
                        width: '200%',
                        height: '370px',
                        borderRadius: '15px',
                        objectFit: 'cover',
                      }}
                      src={images[currentImage]}
                    />
                  )}
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
                      <h6 style={{cursor: 'help'}}>TWILIGHT PHOTOS</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$299</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(1)}>
                    <td>
                      <h6 style={{cursor: 'help'}}>VIRTUAL TWILIGHT</h6>
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
                      <h6 style={{cursor: 'help'}}>VIRTUAL STAGING</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$49 PER IMG</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(3)}>
                    <td>
                      <h6 style={{cursor: 'help'}}>AERIAL PHOTOGRAPHY</h6>
                    </td>
                    <td className='text-center'>
                      <h6>$99 (6 - 12 PHOTOS)</h6>
                    </td>
                  </tr>
                  <tr
                    style={{borderBottom: '1px solid gray'}}
                    onClick={() => setCurrentImage(4)} // Update currentImage to 4 when clicked
                  >
                    <td>
                      <h6 style={{cursor: 'help'}}>AERIAL PHOTOGRAPHY</h6>
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

        {/* SOCIAL MEDIA REEL */}

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
                SOCIAL MEDIA REEL
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                CHOOSE IF YOU WOULD LIKE AN AGENT OR NOT.
              </h6>
            </Row>

            <Row className='text-center mx-auto p-5'>
              <Col
                md={6}
                id='table1'
                style={{display: activeTable === 'table1' ? 'block' : 'none'}}>
                <h4 className='text-center'> WITH AGENT</h4>
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
                  <video
                    style={{
                      width: '200%',
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
              className='btn btn-warning'
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
                fill='black'
                viewBox='0 0 16 16'>
                <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z' />
                <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' />
              </svg>
            </button>
            <button
              className='btn btn-warning '
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
                fill='black'
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
                      <h6>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>24 IMAGES</h6>
                    </td>
                    <td>
                      <h6>$249</h6>
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
                <h4 className='text-center'> AERIAL VIDEO</h4>
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
                      <h6>VIDEO ONLY</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
                    </td>
                  </tr>
                  <tr style={{borderBottom: '1px solid gray'}}>
                    <td>
                      <h6>WITH LOT LINES + MARKERS</h6>
                    </td>
                    <td>
                      <h6>$299</h6>
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
                2D & 3D FLOOR PLANS
              </Card.Title>
              <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
              <h6
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '12px',
                }}>
                <b style={{fontSize: '12px'}}> BLUEPRINTS </b> ARE MADE WITH DIGITAL PHOTOGRAPHY.
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
                      <h6>2D & 3D FLOOR PLANS</h6>
                    </td>
                    <td>
                      <h6>$199</h6>
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
                  THE PRICES ARE BASED ON THE SIZE OF THE PROPERTY.
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
                    src={floorplans}
                  />
                </Col>
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
