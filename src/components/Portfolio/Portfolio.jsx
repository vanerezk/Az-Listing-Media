import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import firstphoto from '../../assets/photos/23555 N 159th Ave-12.jpg';
import secondphoto from '../../assets/photos/42 E Interlacken Dr-35.jpg';
import thirdphoto from '../../assets/photos/207208 N 129th Dr-95.jpg';
import sixthphoto from '../../assets/photos/207208 N 129th Dr-89.jpg';
import seventhphoto from '../../assets/photos/28556 N 124th Dr Website-2 2.jpg';
import eightphoto from '../../assets/photos/23555 N 159th Ave-17.jpg';
import ninephoto from '../../assets/photos/23555 N 159th Ave-22.jpg';

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    secondphoto,
    seventhphoto,
    eightphoto,
    ninephoto,
    firstphoto,
    thirdphoto,
    sixthphoto,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);
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
             mx-auto text-center bg-light  w-100 '
        style={{marginTop: '100px', paddingTop: '100px'}}>
        <h6
          className='text-center '
          style={{letterSpacing: '10px'}}>
          CHECK OUT OUR{' '}
        </h6>
        <h1
          className='text-center '
          style={{
            letterSpacing: '8px',
            fontSize: '50px',
            marginBottom: '50px',
          }}>
          PORTFOLIO
        </h1>

        <Carousel
          responsive={responsive}
          interval={4000}
          infinite={true}
          autoPlay={true}
          swipeable={true}
          arrows={false}
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
                style={{cursor: 'zoom-in'}}
                src={image}
                alt='Image'
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </Carousel>
        <Modal
          show={modalShow}
          onHide={handleClose}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Body style={{padding: 0}}>
            <img
              src={selectedImage}
              alt='Selected Image'
              style={{width: '100%'}}
            />
          </Modal.Body>
        </Modal>
        <div style={{padding: '50px ', marginTop: '50px'}}>
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
              VIEW MORE
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
