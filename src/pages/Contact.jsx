import {Link} from 'react-router-dom';
import Faq from '../components/Faq/Faq';
import ContactBG from '../components/ContactBG/ContactBG';

function Contact() {
  return (
    <>
      <ContactBG />
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
              BUSINESS HOURS
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
                <b>Phone:</b> 623-252-0066
              </p>
              <p>
                <b>Email:</b> info@azlistingmedia.com
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
                  to='https://azlistingmedia.portal.realestatemediahero.com/'
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
        </div>

        <Faq />
      </div>
    </>
  );
}

export default Contact;
