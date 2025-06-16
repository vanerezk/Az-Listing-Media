import {Link} from 'react-router-dom';
import Faq from '../components/Faq/Faq';
// import firstlogo from '../assets/photos/Pulte_Group_updated_logo.png';
// import secondlogo from '../assets/photos/Realty_ONE_Group_Logo_Black_Text.png';
// import thirdlogo from '../assets/photos/REAX_BIG.png';
// import fourthlogo from '../assets/photos/Noble_Logo_Final_Blk.png';
// import Carousel from 'react-multi-carousel';
import firstphoto from '../assets/photos/9451 W Ross Ave Website-1.jpg';
import secondphoto from '../assets/photos/10851 N Black Canyon HWY-3.jpg';
import thirdphoto from '../assets/photos/22619 N San Ramon_Drone-3.jpg';
import fourthphoto from '../assets/photos/19312 W Puget Ave-77.jpg';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

function Contact() {
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
        className=' text-center'
        style={{marginTop: '250px', marginBottom: '100px'}}>
        <div
          className='row container text-center mx-auto '
          style={{marginTop: '100px'}}>
          <div className='col-lg-6 col-md-6 col-sm-12 pt-5'>
            <h1
              className='text-black'
              style={{fontSize: '24px', marginBottom: '20px'}}>
              HOURS OF OPERATION
            </h1>
            <hr style={{width: '30%', margin: 'auto'}} />
            <div
              className='text-black text-justify mt-5 '
              style={{
                fontSize: '16px',
                paddingLeft: '25px',
                paddingRight: '25px',
              }}>
              <p
                className='text-center'
                style={{fontSize: '20px', marginTop: '-30px'}}>
                {' '}
                Monday - Friday: 10am - 5pm
              </p>
              <p className='text-center'> Sunrise / Sunset / Weekends: Upon request.</p>
            </div>
            <h1
              className='text-black'
              style={{fontSize: '24px', marginBottom: '20px', marginTop: '50px'}}>
              CONTACT INFO
            </h1>
            <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
            <div
              className='text-black '
              style={{
                fontSize: '16px',
                marginBottom: '40px',
              }}>
              <p>
                <b>Phone:</b> 623-640-8909
              </p>
              <p>
                <b>Email:</b> azlistingmedia@gmail.com
              </p>
            </div>{' '}
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
                  SCHEDULE NOW
                </Link>
              </button>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 mb-5 '>
            <Carousel
              responsive={responsive}
              arrows={false}
              interval={10000}
              infinite={true}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              renderDotsOutside={true}
              customTransition='transform 300ms ease-in-out'
              transitionDuration={300}
              containerClass='carousel-container'
              className=' mx-auto w-100 h-100 '>
              <img
                src={firstphoto}
                style={{
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover',
                  background: 'none',
                  padding: '2%',
                  borderRadius: '15px',
                }}
                alt='about'
              />
              <img
                src={secondphoto}
                style={{
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover',
                  background: 'none',
                  padding: '2%',
                  borderRadius: '15px',
                }}
                alt='about'
              />
              <img
                style={{
                  borderRadius: '15px',
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover',
                  background: 'none',
                  padding: '2%',
                }}
                src={thirdphoto}
                alt='about'
              />
              <img
                style={{
                  borderRadius: '15px',
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover',
                  background: 'none',
                  padding: '2%',
                }}
                src={fourthphoto}
                alt='about'
              />
            </Carousel>
          </div>
        </div>

        <Faq />
      </div>
    </>
  );
}

export default Contact;
