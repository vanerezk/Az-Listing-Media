import './ContactBG.css';
const ContactBG = () => {
  return (
    <div className='contactbg'>
      <img
        className='contactbgimg w-100  position-absolute top-0 start-0'
        src='../../src/assets/photos/1836_E_Turquoise_Ave-81.jpg'
        alt='bgimg'
        id='bgimg'
        style={{zIndex: '-1', height: '100%', objectFit: 'cover'}}
      />
    </div>
  );
};

export default ContactBG;
