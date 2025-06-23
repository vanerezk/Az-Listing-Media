import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <>
      <div
        className=' mx-auto w-100 p-5'
        style={{marginTop: '100px'}}>
        <h1
          style={{
            letterSpacing: '5px',
            color: 'black',
            textAlign: 'center',

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

            textAlign: 'left',
          }}>
          <Accordion
            defaultActiveKey='0'
            flush
            style={{
              maxWidth: '70%',
              margin: '0 auto',
              marginBottom: '50px',

              '--bs-accordion-bg': 'rgb(255, 255, 255)',
              '--bs-accordion-border-color': ' #ffa804',
              '--bs-accordion-btn-focus-border-color': ' #ffa804',
              '--bs-accordion-btn-focus-box-shadow': 'none',
              '--bs-accordion-active-color': '#ffa804',
              '--bs-accordion-active-bg': 'rgb(255, 255, 255)',
              '--bs-accordion-active-border-color': '#ffa804',
            }}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                {' '}
                <b>What types of properties do you photograph?</b>
              </Accordion.Header>
              <Accordion.Body
                style={{color: 'black'}}
                className='text-justify'>
                We photograph all types — from residential homes and luxury estates to commercial
                buildings and new developments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <b>How long does a typical photoshoot take?</b>
              </Accordion.Header>
              <Accordion.Body>
                Most shoots take between 1 to 2 hours depending on the property size and services
                requested.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <b>What kind of photos do you deliver?</b>
              </Accordion.Header>
              <Accordion.Body>
                {' '}
                We provide high-resolution HDR, professionally edited images optimized for all of
                your marketing needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                <b>Can you help with staging or preparing the property?</b>
              </Accordion.Header>
              <Accordion.Body>
                While we don’t provide staging services, we’re happy to offer tips on how to best
                prepare your property for the shoot.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>
                <b>What areas do you serve?</b>
              </Accordion.Header>
              <Accordion.Body>
                We primarily serve the greater Phoenix area, but we’re happy to travel for special
                projects… Just ask!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='5'>
              <Accordion.Header>
                <b>What is your cancellation policy?</b>
              </Accordion.Header>
              <Accordion.Body>
                We require at least 24 hours notice for cancellations or rescheduling to avoid fees.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='6'>
              <Accordion.Header>
                <b>When is the best time of day for real estate photography?</b>
              </Accordion.Header>
              <Accordion.Body>
                The best time is typically late morning to early afternoon when natural light is
                abundant and even. For dramatic lighting, twilight or golden hour sessions can add
                warmth and a luxury feel to your listing.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='7'>
              <Accordion.Header>
                <b>Do I need to be at the property at the time of the shoot?</b>
              </Accordion.Header>
              <Accordion.Body>
                Not necessarily. As long as we have access to the property and any instructions in
                advance, you don’t need to be present. Many agents prefer to let us handle it so
                they can stay focused on their day.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='8'>
              <Accordion.Header>
                <b>What should I do to get my property ready for the shoot?</b>
              </Accordion.Header>
              <Accordion.Body>
                Declutter, clean, and open blinds to let in natural light. Turn on all lights and
                make sure personal items are tucked away. We’ll send you a prep checklist to make it
                easy!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
