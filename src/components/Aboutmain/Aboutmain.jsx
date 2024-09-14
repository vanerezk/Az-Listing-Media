import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import aboutphoto from '../../assets/photos/42 E Interlacken Dr-43.jpg';

function Aboutmain() {
  return (
    <>
      {/* ABOUT US DESKTOP */}
      <div className='d-none d-md-block'>
        <h1
          className='text-center d-none d-md-block '
          style={{
            marginTop: '52px',
            fontSize: '28px',
            letterSpacing: '10px',
          }}>
          ABOUT US
        </h1>
        <hr
          className=' mx-auto d-none d-md-block '
          style={{marginTop: '20px', marginBottom: '20px', width: '300px'}}
        />

        <div
          className='container'
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            marginTop: '-100px',
          }}>
          <div
            className='mx-auto d-none d-md-block'
            style={{
              paddingLeft: '60px',
              paddingRight: '60px',
            }}>
            <Row className=' mx-auto'>
              <Col className='text-center '>
                <h5 style={{width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique earum
                  consectetur nisi corporis nihil eum officiis distinctio odio minus consequuntur
                  error, dignissimos facilis? Eaque harum impedit incidunt ad ea! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. In omnis reprehenderit fugit ipsam
                  voluptatibus, adipisci deleniti delectus exercitationem dolor illum veniam sunt?
                  Ea, assumenda deserunt temporibus autem impedit ratione dolorum?
                </h5>
              </Col>
              <Col className='text-center'>
                <img
                  src={aboutphoto}
                  alt='NO PHOTO YET'
                  style={{
                    width: '70%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* ABOUT US MOBILE */}
      <div className='d-block d-md-none '>
        <div
          className='bg-light '
          style={{paddingBottom: '50px', paddingTop: '50px'}}>
          <h1
            className='text-center '
            style={{
              marginTop: '52px',
              fontSize: '28px',
              letterSpacing: '10px',
            }}>
            ABOUT US
          </h1>
          <hr
            className=' mx-auto'
            style={{marginTop: '20px', marginBottom: '20px', width: '200px'}}
          />

          <div
            className='container'
            style={{
              width: '80%',
            }}>
            <Row>
              <Col md={6}>
                <h5
                  style={{
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: '16px',
                    textAlign: 'justify',
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique earum
                  consectetur nisi corporis nihil eum officiis distinctio odio minus consequuntur
                  error, dignissimos facilis? Eaque harum impedit incidunt ad ea! Lorem ipsum dolor
                  sit amet, consectetur adipisicin elit. In omnis reprehenderit fugit ipsam.
                </h5>
              </Col>
              <Col
                md={6}
                className='text-center'>
                <img
                  src={aboutphoto}
                  alt='NO PHOTO YET'
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginTop: '20px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmain;
