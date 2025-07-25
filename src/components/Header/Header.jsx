import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

import logo from '../../assets/photos/AZ_Listing_Media.png';

function Header() {
  return (
    <>
      <Navbar
        style={{backgroundColor: 'black', height: '50px'}}
        id='navnegra'>
        <Container>
          <Row className=' align-items-center w-100 d-none d-lg-flex'>
            <Col style={{marginLeft: '7px'}}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='white'
                style={{marginLeft: '10px'}}
                viewBox='0 0 16 16'>
                <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z' />
              </svg>
              <a
                className='text-white mx-3 '
                style={{cursor: 'pointer', textDecoration: 'none'}}
                target='_blank'>
                {' '}
                623-640-8909
              </a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='white'
                style={{marginLeft: '10px'}}
                viewBox='0 0 16 16'>
                <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z' />
              </svg>
              <a
                className='text-white mx-3 '
                style={{cursor: 'pointer', textDecoration: 'none'}}
                target='_blank'>
                azlistingmedia@gmail.com
              </a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='19'
                id='location-icon-svg'
                fill='white'
                style={{marginLeft: '10px'}}
                viewBox='0 0 16 16'>
                <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
              </svg>
              <a
                target='_blank'
                id='location-icon-svg'
                className='text-white mx-3'
                style={{cursor: 'pointer', textDecoration: 'none'}}>
                Phoenix, Arizona
              </a>
            </Col>
            <Col
              className='text-right'
              style={{marginRight: '-20px'}}>
              <a
                href='https://www.facebook.com/azlistingmedia'
                className='mx-4'>
                <svg
                  style={{marginLeft: '10px'}}
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='white'
                  viewBox='0 0 16 16'>
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/azlistingmedia'
                className='mx-4'
                target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='white'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
                </svg>
              </a>
              <a
                href='https://www.youtube.com/channel/UCRmUn3SaP1p9D6Z13-6Y2Rw'
                target='_blank'
                className='mx-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  style={{marginTop: '3px'}}
                  width='23'
                  height='23'
                  fill='white'
                  viewBox='0 0 16 16'>
                  <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z' />
                </svg>
              </a>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {/* Navbar AZ */}
      <Navbar
        expand='lg'
        id='navbarScrolltwo'
        className='bg-light shadow w-100  '>
        <Container>
          <Link
            to='/'
            className='navbar-brand'>
            <img
              src={logo}
              width='150px'
              alt='logo'
              className='logo'
            />
          </Link>
          <Navbar.Toggle
            style={{marginRight: '30px'}}
            aria-controls='navbarScroll'
          />
          <Navbar.Collapse
            id='navbarScroll'
            className='justify-content-end bg-light'>
            <Nav navbarScroll>
              <b>
                <Link
                  to='/Pricings'
                  reloadDocument
                  style={{marginRight: '25px', fontSize: '17px', color: 'black'}}
                  className='nav-link'>
                  PRICING
                </Link>
              </b>
              <b>
                <Link
                  style={{marginRight: '25px', fontSize: '17px', color: 'black'}}
                  reloadDocument
                  to='/portfolio'
                  className='nav-link'>
                  {' '}
                  PORTFOLIO
                </Link>
              </b>

              <b>
                <Link
                  style={{marginRight: '25px', fontSize: '17px', color: 'black'}}
                  reloadDocument
                  to='/contact'
                  className='nav-link'>
                  CONTACT
                </Link>
              </b>

              <b>
                <button
                  className='btn btn-dark'
                  id='scheduleButton'
                  onClick={() =>
                    window.open('https://azlistingmedia.portal.realestatemediahero.com/', '_blank')
                  }>
                  SCHEDULE NOW
                </button>
              </b>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
