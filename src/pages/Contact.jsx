import contactphoto from '../assets/photos/19312 W Puget Ave-77.jpg';
import {Link} from 'react-router-dom';
import Faq from '../components/Faq/Faq';
import firstlogo from '../assets/photos/Pulte_Group_updated_logo.png';
import secondlogo from '../assets/photos/Realty_ONE_Group_Logo_Black_Text.png';
import thirdlogo from '../assets/photos/REAX_BIG.png';
import fourthlogo from '../assets/photos/Noble_Logo_Final_Blk.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        style={{marginTop: '200px', marginBottom: '100px'}}>
        <div
          className='row container text-center mx-auto '
          style={{marginTop: '100px'}}>
          <div className='col-lg-6 col-md-6 col-sm-12 pt-5'>
            <h1
              className='text-black'
              style={{fontSize: '24px', marginBottom: '20px'}}>
              CONTACT INFO
            </h1>
            <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
            <div
              className='text-black text-justify '
              style={{
                fontSize: '16px',
                paddingLeft: '25px',
                paddingRight: '25px',
                marginBottom: '40px',
              }}>
              <p>
                <b>Phone:</b> 623-640-8909
              </p>
              <p>
                <b>Email:</b> azlistingmedia@gmail
              </p>
            </div>{' '}
            <h1
              className='text-black'
              style={{fontSize: '24px', marginBottom: '20px'}}>
              HOURS OF OPERATION
            </h1>
            <hr style={{width: '30%', margin: 'auto', marginBottom: '20px'}} />
            <div
              className='text-black text-justify mt-5 '
              style={{
                fontSize: '16px',
                paddingLeft: '25px',
                paddingRight: '25px',
                marginBottom: '40px',
              }}>
              <p>
                <b>Phone and Email requests:</b> Monday - Friday: 10am - 5pm
              </p>
              <p>
                {' '}
                <b>Photography requests:</b> Monday - Friday: 10am - 5pm
              </p>
              <p>
                {' '}
                <b>Sunrise/Sunset shootings:</b> upon request
              </p>
              <p>
                <b>Weekends:</b> upon request{' '}
              </p>
            </div>
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

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img
              src={contactphoto}
              alt='about'
              style={{
                width: '90%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>

        <div
          className='mx-auto d-none d-md-block bg-light'
          style={{marginTop: '100px'}}>
          <Carousel
            responsive={responsive}
            interval={20000}
            arrows={false}
            infinite={true}
            autoPlay={true}
            className=' mx-auto w-75 text-center'>
            <img
              src={firstlogo}
              style={{
                width: '400px',
                height: '100px',
                padding: '10px',
                marginTop: '12px',
                objectFit: 'contain',
                background: 'none',
                border: 'none',
              }}
              alt=' '
            />
            <img
              src={secondlogo}
              style={{
                width: '400px',
                height: '100px',
                padding: '5px',
                marginTop: '15px',
                objectFit: 'contain',
                background: 'none',
                border: 'none',
              }}
              alt=' '
            />
            <img
              src={thirdlogo}
              style={{
                width: '300px',
                height: '50px',
                marginTop: '35px',
                padding: '5px',

                objectFit: 'contain',
                background: 'none',
                border: 'none',
              }}
              alt=' '
            />
            <img
              src={fourthlogo}
              style={{
                width: '500px',
                height: '120px',
                padding: '5px',
                marginTop: '10px',
                objectFit: 'contain',
                background: 'none',
                border: 'none',
              }}
              alt=' '
            />
          </Carousel>
        </div>

        <Faq />
      </div>
    </>
  );
}

export default Contact;
