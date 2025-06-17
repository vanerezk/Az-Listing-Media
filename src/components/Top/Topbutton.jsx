import {MDBIcon} from 'mdb-react-ui-kit';
import {Button, Container} from 'react-bootstrap';
import './Topbutton.css';

function Topbutton() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById('btn-back-to-top');
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Container>
      <Button
        onClick={backToTop}
        id='btn-back-to-top'
        variant='dark'
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          display: 'none',
          zIndex: '99',
        }}
        className='btn-floating'
        color='dark'
        size='lg'>
        <MDBIcon icon='arrow-up' />
      </Button>

      <link
        href='https://use.fontawesome.com/releases/v5.15.1/css/all.css'
        rel='stylesheet'
      />
    </Container>
  );
}

export default Topbutton;
