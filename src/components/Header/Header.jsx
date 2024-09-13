import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

function Header() {
  return (
    <>
      <div style={{position: 'fixed', top: '0', width: '100%', zIndex: '999'}}>
        <Navbar style={{backgroundColor: 'black'}}>
          <Container>
            <Row className=' align-items-center w-100 d-none d-lg-flex'>
              <Col>
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
                  width='16'
                  height='16'
                  fill='white'
                  style={{marginLeft: '10px'}}
                  viewBox='0 0 16 16'>
                  <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z' />
                </svg>
                <a
                  target='_blank'
                  className='text-white mx-3'
                  style={{cursor: 'pointer', textDecoration: 'none'}}>
                  azlistingmedia@gmail.com
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='white'
                  style={{marginLeft: '10px'}}
                  viewBox='0 0 16 16'>
                  <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
                </svg>
                <a
                  target='_blank'
                  className='text-white mx-3'
                  style={{cursor: 'pointer', textDecoration: 'none'}}>
                  Phoenix, Arizona
                </a>
              </Col>
              <Col className='text-right'>
                <a
                  href='https://twitter.com'
                  className='mx-1'>
                  <svg
                    style={{marginLeft: '10px'}}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='white'
                    viewBox='0 0 16 16'>
                    <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
                  </svg>
                </a>
                <a
                  href='https://www.instagram.com/azlistingmedia'
                  className='mx-1'
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
                  className='mx-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='white'
                    viewBox='0 0 16 16'>
                    <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z' />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/company/az-listing-media/'
                  target='_blank'
                  className='mx-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='white'
                    viewBox='0 0 16 16'>
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
                  </svg>
                </a>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Navbar
          expand='lg'
          className='bg-light shadow p-3'>
          <Container>
            <Link
              to='/'
              className='navbar-brand'>
              <img
                src='https://media.discordapp.net/attachments/1270138186823372920/1270139471370784779/AZ_Listing_Media_Logo_Long.png?ex=66e55ed0&is=66e40d50&hm=969efb722b07b26c11e4b582cd8a14bb87052d17a7da8dff186c62a82efb79e4&=&format=webp&quality=lossless&width=1440&height=219'
                width='250'
                alt='logo'
                className='logo'
              />
            </Link>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse
              id='navbarScroll'
              className='justify-content-end  '>
              <Nav
                className='me-2 my-2 my-lg-0'
                style={{maxHeight: '200px'}}
                navbarScroll>
                <b>
                  <Link
                    to='/Pricings'
                    className='nav-link'>
                    Pricings
                  </Link>
                </b>
                <b>
                  <Link
                    to='/portfolio'
                    className='nav-link'>
                    Portfolio
                  </Link>
                </b>
                <b>
                  <Link
                    to='/about'
                    className='nav-link'>
                    About
                  </Link>
                </b>
                <b>
                  <Link
                    to='/contact'
                    className='nav-link'>
                    Contact
                  </Link>
                </b>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
