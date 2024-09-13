import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Abooutmain() {
  return (
    <>
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
                voluptatibus, adipisci deleniti delectus exercitationem dolor illum veniam sunt? Ea,
                assumenda deserunt temporibus autem impedit ratione dolorum?
              </h5>
            </Col>
            <Col className='text-center'>
              <img
                src='./src/assets/photos/Twilight_28556 N 124th Dr-1.png'
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
    </>
  );
}

export default Abooutmain;
