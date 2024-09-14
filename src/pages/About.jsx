import Faq from '../components/Faq/Faq';
import firstphoto from '../assets/photos/9451 W Ross Ave Website-1.jpg';
import secondphoto from '../assets/photos/10851 N Black Canyon HWY-3.jpg';
import thirdphoto from '../assets/photos/22619 N San Ramon_Drone-3.jpg';
import fourthphoto from '../assets/photos/19312 W Puget Ave-77.jpg';
import firstlogo from '../assets/photos/Pulte_Group_updated_logo.png';
import secondlogo from '../assets/photos/Realty_ONE_Group_Logo_Black_Text.png';
import thirdlogo from '../assets/photos/REAX_BIG.png';
import fourthlogo from '../assets/photos/Noble_Logo_Final_Blk.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function About() {
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
        style={{marginTop: '230px', marginBottom: '100px'}}>
        <div
          className='row container text-center mx-auto'
          style={{marginTop: '100px'}}>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1
              className='text-black'
              style={{letterSpacing: '10px'}}>
              WHO ARE WE?
            </h1>
            <p
              className='text-black text-justify'
              style={{
                fontSize: '16px',
                marginTop: '20px',
                marginBottom: '40px',
                paddingLeft: '25px',
                paddingRight: '25px',
              }}>
              Eighteen Percent Productions LLC is a real estate marketing agency that provides a
              full range of services to the real estate industry. We are committed to helping our
              clients achieve their goals and goals. We offer a variety of services, including
              marketing, branding, advertising, and social media management. We work with clients to
              create a unique brand identity that reflects their vision and values. We are here to
              help you achieve your goals and goals.
            </p>
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
                  height: '450px',
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
                  height: '450px',
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
                  height: '450px',
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
                  height: '450px',
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

        <div
          className='mx-auto d-none d-md-block bg-light'
          style={{marginTop: '40px'}}>
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

        {/* <div
          className='mx-auto d-none d-md-block mt-5  bg-light'
          style={{width: '100%', height: '150px'}}
          id='clients'>
          <div style={{display: 'inline-block', paddingRight: '50px'}}>
            <img
              src={firstlogo}
              alt='about'
              style={{height: '100px'}}
            />
          </div>
          <div style={{display: 'inline-block', paddingRight: '50px'}}>
            <img
              src={secondlogo}
              alt='about'
              style={{height: '150px'}}
            />
          </div>
          <div style={{display: 'inline-block', marginTop: '20px', paddingRight: '50px'}}>
            <img
              src={thirdlogo}
              alt='about'
              style={{height: '40px'}}
            />
          </div>
          <div style={{display: 'inline-block'}}>
            <img
              src={fourthlogo}
              alt='about'
              style={{height: '100px'}}
            />
          </div>
        </div> */}

        <Faq />
      </div>
    </>
  );
}

export default About;
