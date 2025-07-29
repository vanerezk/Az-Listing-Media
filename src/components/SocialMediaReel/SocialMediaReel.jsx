import './SocialMediaReel.css';

const SocialMediaReel = () => {
  return (
    <div className='container-smartphone'>
      <div className='smartphone'>
        <div className='content'>
          <video
            loop
            controls
            src='../../src/assets/videos/SocialMediaReel.mp4'
            style={{objectFit: 'contain', width: '100%', height: '100%', zIndex: '-1'}}
          />
        </div>
      </div>
      <div className='smartphone'>
        <div className='content'>
          <video
            loop
            controls
            src='../../src/assets/videos/SocialMediaReel.mp4'
            style={{objectFit: 'contain', width: '100%', height: '100%', zIndex: '-1'}}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaReel;
