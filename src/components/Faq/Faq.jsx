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

            textAlign: 'center',
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
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
