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
              style={{fontSize: '26px', marginBottom: '20px'}}>
              CONTACT INFO
            </h1>
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
              style={{fontSize: '26px', marginBottom: '20px'}}>
              HOURS OF OPERATION
            </h1>
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
            <h1
              className='text-black'
              style={{fontSize: '26px', marginBottom: '20px'}}>
              BOOKING
            </h1>
            <div
              className='text-black text-justify mt-5 '
              style={{
                fontSize: '16px',
                paddingLeft: '25px',
                paddingRight: '25px',
                marginBottom: '40px',
              }}>
              <p>
                {' '}
                If you are ready to schedule a shoot with us you can make an appointment at this{' '}
                <a
                  href='https://calendly.com/azlistingmedia'
                  target='_blank'>
                  link
                </a>
              </p>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img
              src='./src/assets/photos/Twilight_28556 N 124th Dr-1.png'
              alt='about'
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </div>
        </div>

        {/* <Faq /> */}
      </div>
    </>
  );
}

export default Contact;
