import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import firstphoto from '../../assets/photos/15323 W Campbell Ave-1.jpg';
import secondphoto from '../../assets/photos/16053 N 159th Ln_Drone-2.png';
import thirdphoto from '../../assets/photos/207208 N 129th Dr-95.jpg';
import fourthphoto from '../../assets/photos/42 E Interlacken Dr-5.jpg';
import fifthphoto from '../../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import sixthphoto from '../../assets/photos/22619 N San Ramon_Drone-1.jpg';

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [firstphoto, secondphoto, thirdphoto, fourthphoto, fifthphoto, sixthphoto];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };

  return (
    <>
      <div
        className='
             mx-auto text-center bg-light   '
        style={{marginTop: '100px', height: '100vh', paddingTop: '100px'}}>
        <h1
          className='text-center '
          style={{
            fontSize: '28px',
            letterSpacing: '10px',
          }}>
          PORTFOLIO
        </h1>
        <hr
          className=' mx-auto d-none d-md-block '
          id='lineaservices'
          style={{
            border: 'none',
            width: '300px',
            height: '5px',
            marginBottom: '80px',
          }}
        />
        <hr
          className=' mx-auto d-md-none w-25   '
          style={{width: '400px', marginTop: '20px', marginBottom: '20px'}}
        />
        <Carousel
          responsive={responsive}
          interval={5000}
          infinite={true}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          renderDotsOutside={true}
          customTransition='transform 300ms ease-in-out'
          transitionDuration={300}
          containerClass='carousel-container'
          className=' mx-auto w-75'>
          {images.map((image, index) => (
            <div
              className='d-flex justify-content-center'
              key={index}>
              <img
                className='firstphoto'
                src={image}
                alt='Image'
                onClick={() => handleImageClick(image)}
              />
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size='xl'
                aria-labelledby='contained-modal-title-vcenter'
                centered>
                <Modal.Body style={{padding: '0px', margin: '0px'}}>
                  <CloseButton
                    style={{float: 'right', zIndex: 1, marginTop: '-30px'}}
                    onClick={() => setModalShow(false)}
                  />
                  <img
                    src={selectedImage}
                    alt='Selected Image'
                    style={{width: '100%', height: '70%'}}
                  />
                </Modal.Body>
              </Modal>
            </div>
          ))}
        </Carousel>
        <div style={{padding: '50px ', paddingBottom: '100px'}}>
          <button
            className='btn btn-light  '
            style={{
              backgroundColor: 'lightgray',
              marginTop: '50px',
              borderRadius: '5px',
              padding: '15px 35px',
            }}>
            <Link
              to='https://spiro.media/'
              target='_blank'
              style={{
                textDecoration: 'none',

                color: 'black',
                letterSpacing: '1px',
                fontSize: '18px',
              }}>
              FULL PORTFOLIO
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
