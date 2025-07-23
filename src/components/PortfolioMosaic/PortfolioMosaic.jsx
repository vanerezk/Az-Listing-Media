import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import interlacken from '../../assets/photos/42 E Interlacken Dr-1.jpg';
import interlackentwo from '../../assets/photos/42 E Interlacken Dr-5.jpg';
import droneone from '../../assets/photos/42 E Interlacken Dr-35.jpg';
import dronetwo from '../../assets/photos/42 E Interlacken Dr-36.jpg';
import interlackenfive from '../../assets/photos/42 E Interlacken Dr-43.jpg';
import puggetone from '../../assets/photos/19312 W Puget Ave-21.jpg';
import puggettwo from '../../assets/photos/19312 W Puget Ave-25.jpg';
import puggetthree from '../../assets/photos/19312 W Puget Ave-29.jpg';
import puggetfour from '../../assets/photos/1836_E_Turquoise_Ave-24.jpg';
import puggetfive from '../../assets/photos/19312 W Puget Ave Website-2.jpg';
import puggetsix from '../../assets/photos/19312 W Puget Ave Website-3 3.jpg';
import puggetseven from '../../assets/photos/19312 W Puget Ave_Twilight-1.jpg';
import puggeteight from '../../assets/photos/19312 W Puget Ave_Twilight-2.jpg';
import drfirst from '../../assets/photos/207208 N 129th Dr-89.jpg';
import drsecond from '../../assets/photos/207208 N 129th Dr-90.jpg';
import drthird from '../../assets/photos/207208 N 129th Dr-95.jpg';
import dronethird from '../../assets/photos/207208 N 129th Dr-145.jpg';
import dronefourth from '../../assets/photos/22619 N San Ramon_Drone-3.jpg';
import dronefifth from '../../assets/photos/39718 N Bridlewood Way Drone-10.jpg';
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
          src={interlacken}
          alt='interlacken'
          onClick={() => handleImageClick(interlacken)}
        />
      </div>
      <div className='tile'>
        <img
          src={interlackentwo}
          alt='interlacken'
          onClick={() => handleImageClick(interlackentwo)}
        />
      </div>
      <div className='tile'>
        <img
          src={droneone}
          alt='drone'
          onClick={() => handleImageClick(droneone)}
        />
      </div>
      <div className='tile'>
        <img
          src={dronetwo}
          alt='drone'
          onClick={() => handleImageClick(dronetwo)}
        />
      </div>
      <div className='tile'>
        <img
          src={interlackenfive}
          alt='interlacken'
          onClick={() => handleImageClick(interlackenfive)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetone}
          alt='pugget'
          onClick={() => handleImageClick(puggetone)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggettwo}
          alt='pugget'
          onClick={() => handleImageClick(puggettwo)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetthree}
          alt='pugget'
          onClick={() => handleImageClick(puggetthree)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetfour}
          alt='pugget'
          onClick={() => handleImageClick(puggetfour)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetfive}
          alt='pugget'
          onClick={() => handleImageClick(puggetfive)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetsix}
          alt='pugget'
          onClick={() => handleImageClick(puggetsix)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggetseven}
          alt='pugget'
          onClick={() => handleImageClick(puggetseven)}
        />
      </div>
      <div className='tile'>
        <img
          src={puggeteight}
          alt='pugget'
          onClick={() => handleImageClick(puggeteight)}
        />
      </div>
      <div className='tile'>
        <img
          src={drfirst}
          alt='drone'
          onClick={() => handleImageClick(drfirst)}
        />
      </div>
      <div className='tile'>
        <img
          src={drsecond}
          alt='drone'
          onClick={() => handleImageClick(drsecond)}
        />
      </div>
      <div className='tile'>
        <img
          src={drthird}
          alt='drone'
          onClick={() => handleImageClick(drthird)}
        />
      </div>
      <div className='tile'>
        <img
          src={dronethird}
          alt='drone'
          onClick={() => handleImageClick(dronethird)}
        />
      </div>
      <div className='tile'>
        <img
          src={dronefourth}
          alt='drone'
          onClick={() => handleImageClick(dronefourth)}
        />
      </div>
      <div className='tile'>
        <img
          src={dronefifth}
          alt='drone'
          onClick={() => handleImageClick(dronefifth)}
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
