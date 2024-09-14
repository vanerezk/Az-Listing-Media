import video from '../../assets/videos/V1_15323 W Campbell Ave.mp4';
function Videopricings() {
  return (
    <div
      style={{zIndex: '1', position: 'relative'}}
      className='d-md-none'>
      <h1
        className=' text-white '
        style={{
          letterSpacing: '10px',
          fontSize: '30px',
          fontWeight: 'bold',
          position: 'fixed',
          marginTop: '-110px',
          marginLeft: '90px',
        }}>
        PRICINGS
      </h1>
      <video
        id='backgroundvideo'
        style={{
          width: '100%',
          height: '25vh',
          objectFit: 'cover',
          marginTop: '98px',
        }}
        autoPlay
        muted
        loop>
        <source
          src={video}
          type='video/mp4'
        />
      </video>
    </div>
  );
}

export default Videopricings;
