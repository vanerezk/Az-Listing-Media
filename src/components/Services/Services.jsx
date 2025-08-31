import {Card, Col, Row} from 'react-bootstrap';
import {BsCameraFill, BsPlayCircleFill} from 'react-icons/bs';

import {GiDeliveryDrone} from 'react-icons/gi';
import {GoPeople} from 'react-icons/go';
import './Services.css';

import listingMediaImage from '../../assets/photos/28556 N 124th Dr Website-1.jpg';
import marketingImage from '../../assets/photos/image.jpeg'; // Assuming this is the video image
import aerialServicesImage from '../../assets/photos/13406 W Rowel Rd-24.jpg'; // Assuming this is the virtual tour image
import agentBrandingImage from '../../assets/photos/wesley-tingey-K2eShE-1yGw-unsplash-scaled.jpg'; // Assuming this is the floor plan image

function Services() {
  return (
    <div
      className='mx-auto w-100'
      style={{marginTop: '70px'}}>
      <h6
        className='text-center'
        style={{letterSpacing: '10px'}}>
        A COMPLETE REAL ESTATE
      </h6>
      <h1
        className='text-center'
        style={{letterSpacing: '8px', fontSize: '50px', marginBottom: '50px'}}>
        MEDIA SOLUTION
      </h1>

      <Row
        xs={1}
        md={2}
        lg={4}
        className='g-4 mx-auto fourcards '
        style={{width: '90%'}}>
        {/* Listing Media Card */}

        <Col>
          <Card className='service-card'>
            <Card.Img
              variant='top'
              src={listingMediaImage}
              alt='Listing Photos'
              className='card-image'
            />
            <Card.ImgOverlay className='card-overlay'>
              <BsCameraFill className='card-icon' />
              <Card.Title className='card-title'>Listing Media</Card.Title>
              <Card.Text className='card-text'>
                Listing photos, property videos, 3D Tours, Virtual Tours and more.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        {/* Marketing Videos Card */}
        <Col>
          <Card className='service-card'>
            <Card.Img
              variant='top'
              src={marketingImage}
              alt='Marketing Videos'
              className='card-image'
            />
            <Card.ImgOverlay className='card-overlay'>
              <BsPlayCircleFill className='card-icon' />
              <Card.Title className='card-title'>Marketing videos</Card.Title>
              <Card.Text className='card-text'>
                Cinematic highlights, lifestyle videos and social media content.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        {/* Aerial Services Card */}
        <Col>
          <Card className='service-card'>
            <Card.Img
              variant='top'
              src={aerialServicesImage}
              alt='Virtual Tours'
              className='card-image'
            />
            <Card.ImgOverlay className='card-overlay'>
              <GiDeliveryDrone className='card-icon' />
              <Card.Title className='card-title'>Aerial Services</Card.Title>
              <Card.Text className='card-text'>
                Get a view from above with our licensed drone pilots.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        {/* Agent Branding Card */}
        <Col>
          <Card className='service-card'>
            <Card.Img
              variant='top'
              src={agentBrandingImage}
              alt='Floor Plans'
              className='card-image'
            />
            <Card.ImgOverlay className='card-overlay'>
              <GoPeople className='card-icon' />
              <Card.Title className='card-title'>Agent Branding</Card.Title>
              <Card.Text className='card-text'>
                Elevate your brand with our agent-focused media solutions.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Remove Carousel or re-style it to match the new card design */}
      {/* ... */}
    </div>
  );
}

export default Services;
