// import firstvideo from '../assets/videos/V1_15323 W Campbell Ave.mp4';
// import puggetvideo from '../assets/videos/19321 W Puget Ave_V1.mp4';
import interlacken from '../../assets/photos/42 E Interlacken Dr-1.jpg';
import interlackentwo from '../../assets/photos/42 E Interlacken Dr-5.jpg';
import droneone from '../../assets/photos/42 E Interlacken Dr-35.jpg';
import dronetwo from '../../assets/photos/42 E Interlacken Dr-36.jpg';
import interlackenfive from '../../assets/photos/42 E Interlacken Dr-43.jpg';
import puggetone from '../../assets/photos/19312 W Puget Ave-21.jpg';
import puggettwo from '../../assets/photos/19312 W Puget Ave-25.jpg';
import puggetthree from '../../assets/photos/19312 W Puget Ave-29.jpg';
import puggetfour from '../../assets/photos/19312 W Puget Ave Website-1.jpg';
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
  return (
    <div
      style={{marginTop: '25px', marginBottom: '25px'}}
      className='container'
      id='mosaic-container'>
      <div className='tile'>
        <img
          src={interlacken}
          alt='interlacken'
        />
      </div>
      <div className='tile'>
        <img
          src={interlackentwo}
          alt='interlacken'
        />
      </div>
      <div className='tile'>
        <img
          src={droneone}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={dronetwo}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={interlackenfive}
          alt='interlacken'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetone}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggettwo}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetthree}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetfour}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetfive}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetsix}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggetseven}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={puggeteight}
          alt='pugget'
        />
      </div>
      <div className='tile'>
        <img
          src={drfirst}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={drsecond}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={drthird}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={dronethird}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={dronefourth}
          alt='drone'
        />
      </div>
      <div className='tile'>
        <img
          src={dronefifth}
          alt='drone'
        />
      </div>
    </div>
  );
}

export default PortfolioMosaic;
