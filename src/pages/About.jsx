import Faq from '../components/Faq/Faq';
import Row from 'react-bootstrap/Row';
function About() {
  return (
    <>
      <div
        className=' text-center'
        style={{marginTop: '200px', marginBottom: '100px'}}>
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

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img
              src='./src/assets/photos/Twilight_28556 N 124th Dr-1.png'
              alt='about'
              style={{width: '100%'}}
            />
          </div>
        </div>

        <div
          className='mx-auto d-none d-md-block mt-5 mb-5'
          style={{width: '80%', height: '100px'}}
          id='clients'>
          <Row>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <img
                src='./src/assets/photos/Pulte_Group_updated_logo.png'
                alt='about'
                style={{height: '100px'}}
              />
            </div>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <img
                src='./src/assets/photos/Realty_ONE_Group_Logo_Black_Text.png'
                alt='about'
                style={{height: '100px'}}
              />
            </div>
            <div
              className='col-lg-3 col-md-3 col-sm-12'
              style={{marginTop: '20px'}}>
              <img
                src='./src/assets/photos/REAX_BIG.png'
                alt='about'
                style={{height: '50px'}}
              />
            </div>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <img
                src='./src/assets/photos/Noble_Logo_Final_Blk.png'
                alt='about'
                style={{height: '100px'}}
              />
            </div>
          </Row>
        </div>

        <Faq />
      </div>
    </>
  );
}

export default About;
