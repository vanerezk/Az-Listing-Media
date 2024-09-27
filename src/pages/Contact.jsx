import contactphoto from '../assets/photos/19312 W Puget Ave-77.jpg';
import {Link} from 'react-router-dom';

function Contact() {
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
            <button
              className='btn btn-light d-none d-md-block mx-auto'
              style={{
                marginTop: '40px',
                borderRadius: '0px',
                padding: '10px 30px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              }}>
              <Link
                to='https://spiro.media/'
                target='_blank'
                style={{textDecoration: 'none', color: 'black', letterSpacing: '2px'}}>
                SCHEDULE NOW
              </Link>
            </button>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img
              src={contactphoto}
              alt='about'
              style={{
                width: '90%',
                height: '110%',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>

        {/* <Faq /> */}
      </div>
    </>
  );
}

export default Contact;
