import './SocialMediaReel.css';

const SocialMediaReel = () => {
  return (
    <div className='container-smartphone'>
      <div
        className='iphone'
        style={{marginRight: '50px'}}>
        <div className='notch'></div>
        <div className='content'>
          <video
            loop
            muted
            autoPlay
            src='../../src/assets/videos/SocialMediaReel.mp4'
          />
        </div>
      </div>
      <div
        className='iphonetwo'
        style={{marginLeft: '50px', marginRight: '100px'}}>
        <div className='notch'></div>
        <div className='content'>
          <video
            loop
            muted
            autoPlay
            src='../../src/assets/videos/SocialMediaReel2.mp4'
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaReel;
