import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import {firstphoto} from '../../assets/photos/15323 W Campbell Ave-1.jpg';
import {secondphoto} from '../../assets/photos/16053 N 159th Ln_Drone-2.png';
import {thirdphoto} from '../../assets/photos/207208 N 129th Dr-95.jpg';
import {fourthphoto} from '../../assets/photos/42 E Interlacken Dr-5.jpg';
import {fifthphoto} from '../../assets/photos/28556 N 124th Dr-2.jpg';
import {sixthphoto} from '../../assets/photos/22619 N San Ramon_Drone-1.jpg';

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      image: firstphoto,
    },
    {
      image: secondphoto,
    },
    {
      image: thirdphoto,
    },
    {
      image: fourthphoto,
    },
    {
      image: fifthphoto,
    },
    {
      image: sixthphoto,
    },
  ];

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
             mx-auto text-center   '
        style={{marginTop: '100px'}}>
        <h1
          className='text-center '
          style={{
            marginTop: '52px',
            fontSize: '28px',
            letterSpacing: '10px',
          }}>
          PORTFOLIO
        </h1>
        <hr
          className=' mx-auto d-none d-md-block '
          style={{marginTop: '20px', marginBottom: '20px', width: '300px'}}
        />
        <hr
          className=' mx-auto d-md-none w-25   '
          style={{width: '400px', marginTop: '20px', marginBottom: '20px'}}
        />
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
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
            className='btn mx-auto '
            style={{
              borderRadius: '0px',
              backgroundColor: '#EDEDED',

              padding: '10px 30px',
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            }}>
            <Link
              to='/portfolio'
              style={{textDecoration: 'none', color: 'black'}}>
              FULL PORTFOLIO
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
