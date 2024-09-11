import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <>
      <div className=' mx-auto w-100 p-5 '>
        <h1
          style={{
            letterSpacing: '5px',
            color: 'black',
            textAlign: 'center',
            marginTop: '50px',
            marginBottom: '50px',
          }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <hr
          className=' mx-auto d-none d-md-block w-25   '
          style={{marginTop: '-20px', marginBottom: '50px'}}
        />
        <div
          style={{
            top: '100px',
            left: '50%',

            textAlign: 'center',
          }}>
          <Accordion
            defaultActiveKey='0'
            flush
            style={{
              maxWidth: '70%',
              margin: '0 auto',

              marginBottom: '50px',
            }}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                {' '}
                <b>WHEN IS THE BEST TIME OF DAY FOR REAL ESTATE PHOTOGRAPHY?</b>
              </Accordion.Header>
              <Accordion.Body
                style={{color: 'black'}}
                className='text-justify'>
                When it comes to real estate photography, the orientation of a property matters.
                Different compass directions—whether a property faces east, west, north, or
                south—determine the best time of day for capturing exterior photos.
                <br />
                <br /> Here’s a quick guide:
                <br />
                <br /> - East-facing properties: Morning is the optimal time for shooting. The sun
                rises in the east, so you’ll get lovely light on the front of the house during those
                early hours.
                <br /> - West-facing properties: Afternoons work well. The sun sets in the west,
                casting warm, golden light on the front of the home.
                <br /> - North-facing properties: Anytime between 10:00 AM and 2:00 PM is ideal.
                This avoids harsh shadows and ensures even lighting.
                <br /> - South-facing properties: Aim for early morning or late afternoon. The sun
                will be behind you, illuminating the front of the house without creating strong
                contrasts.
                <br />
                <br /> Remember, not every property fits neatly into these categories. If you’re
                unsure, consider using the LightTrac app (available for iOS and Android) to track
                the sun’s position throughout the day for each property you’re selling. It’ll help
                you plan your photoshoots effectively!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <b>DO I NEED TO BE AT THE PROPERTY AT THE TIME OF THE SHOOTING? </b>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <b>WHAT SHOULD I DO TO GET MY PROPERTY READY FOR THE SHOOTING?</b>
              </Accordion.Header>
              <Accordion.Body>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In impedit sed id itaque,
                laborum sunt corrupti reiciendis dolores harum. Id voluptatibus harum a dolores quam
                laborum aliquid tenetur, culpa officiis.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
