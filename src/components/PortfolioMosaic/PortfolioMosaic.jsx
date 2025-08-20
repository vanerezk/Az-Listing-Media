import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import photo1 from '../../assets/photos/207208 N 129th Dr-89.jpg';
import photo2 from '../../assets/photos/23555 N 159th Ave-21.jpg';
import photo3 from '../../assets/photos/9451 W Ross Ave Website-1.jpg';
import photo4 from '../../assets/photos/2016 W Gloria Website-2.jpg';
import photo5 from '../../assets/photos/Home Example-1.jpg';
import photo6 from '../../assets/photos/28556 N 124th Dr Website-1.jpg';
import photo7 from '../../assets/photos/2244 W Madre Del Oro Virtual Stage-2 2.jpg';
import photo8 from '../../assets/photos/10524 W Deanna Dr-4.jpg';
import photo9 from '../../assets/photos/19312 W Puget Ave Website-2.jpg';
import photo10 from '../../assets/photos/19312 W Puget Ave Website-3 3.jpg';
import photo11 from '../../assets/photos/23555 N 159th Ave-16.jpg';
import photo12 from '../../assets/photos/4131 E Maya Way_VT-2.jpg';
import photo13 from '../../assets/photos/1836 E Turquoise Website-1.jpg';
import photo14 from '../../assets/photos/1836_E_Turquoise_Ave-24.jpg';
import photo15 from '../../assets/photos/13406 W Rowel Rd-24.jpg';
import photo16 from '../../assets/photos/1836 E Turquoise Ave-81.jpg';
import photo17 from '../../assets/photos/1 Canterbury Ln-28.jpg';
import photo18 from '../../assets/photos/1 Canterbury Ln-41.jpg';
import photo19 from '../../assets/photos/18700 Aggie Hodge Aerial RS-3.jpg';
import photo20 from '../../assets/photos/imageaerial.jpeg';
import photo21 from '../../assets/photos/30287 N 115th Dr-48.jpg';
import photo22 from '../../assets/photos/2016 W Gloria Website-1.jpg';
import photo23 from '../../assets/photos/Day 2-4.jpg';
import photo24 from '../../assets/photos/42 E Interlacken Dr-35.jpg';
import './PortfolioMosaic.css';

function PortfolioMosaic() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div
      style={{marginTop: '25px', marginBottom: '25px', marginLeft: '25px', marginRight: '25px'}}
      id='mosaic-container'>
      <div className='tile'>
        <img
          src={photo1}
          alt='photo1'
          onClick={() => handleImageClick(photo1)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo2}
          alt='photo2'
          onClick={() => handleImageClick(photo2)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo3}
          alt='photo3'
          onClick={() => handleImageClick(photo3)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo4}
          alt='photo4'
          onClick={() => handleImageClick(photo4)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo5}
          alt='photo5'
          onClick={() => handleImageClick(photo5)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo8}
          alt='photo8'
          onClick={() => handleImageClick(photo8)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo7}
          alt='photo7'
          onClick={() => handleImageClick(photo7)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo6}
          alt='photo6'
          onClick={() => handleImageClick(photo6)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo9}
          alt='photo9'
          onClick={() => handleImageClick(photo9)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo10}
          alt='photo10'
          onClick={() => handleImageClick(photo10)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo11}
          alt='photo11'
          onClick={() => handleImageClick(photo11)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo12}
          alt='photo12'
          onClick={() => handleImageClick(photo12)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo13}
          alt='photo13'
          onClick={() => handleImageClick(photo13)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo16}
          alt='photo16'
          onClick={() => handleImageClick(photo16)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo19}
          alt='photo19'
          onClick={() => handleImageClick(photo19)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo14}
          alt='photo14'
          onClick={() => handleImageClick(photo14)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo17}
          alt='photo17'
          onClick={() => handleImageClick(photo17)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo18}
          alt='photo18'
          onClick={() => handleImageClick(photo18)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo15}
          alt='photo15'
          onClick={() => handleImageClick(photo15)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo20}
          alt='photo20'
          onClick={() => handleImageClick(photo20)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo21}
          alt='photo21'
          onClick={() => handleImageClick(photo21)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo22}
          alt='photo22'
          onClick={() => handleImageClick(photo22)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo23}
          alt='photo23'
          onClick={() => handleImageClick(photo23)}
        />
      </div>
      <div className='tile'>
        <img
          src={photo24}
          alt='photo24'
          onClick={() => handleImageClick(photo24)}
        />
      </div>

      <Modal
        show={showModal}
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
    </div>
  );
}

export default PortfolioMosaic;
