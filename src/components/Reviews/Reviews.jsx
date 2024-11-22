import Carousel from 'react-bootstrap/Carousel';

import './Reviews.css';

function Reviews() {
  const testimonial = [
    {
      content:
        'Over all though it was a great experience and we hpromoting our next event and I have been approached by 4 oto use it for their own events.I cannot tell you how much we loved s seamless…from set up, to bidding, to payment. We will absolutely use AZ Listing Media for next year',
      author: 'Sarah M., Director of Events',
    },
    {
      content:
        'I cannot tell you how much we loved s seamless…from set up, to bidding, to payment. We will absolutely use AZ Listing Media for next year. I cannot tell you how much we loved s seamless…from set up, to bidding, to payment. We will absolutely use AZ Listing Media for next year',
      author: 'Sarah M., CCHS Foundation',
    },
    {
      content:
        "I tried Az listing media instead of typ and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue. I cannot tell you how much we loved s seamless…from set up, to bidding, to payment. We will absolutely use AZ Listing Media for next year",
      author: 'Alexander B., Pan-Mass Challenge',
    },
  ];

  return (
    <>
      <div
        className=' p-5 mt-5 '
        style={{height: '400px'}}>
        <h6
          className='text-center '
          style={{letterSpacing: '10px'}}>
          HEAR FROM OUR CLIENTS
        </h6>
        <h1
          className='text-center  d-none d-md-block '
          style={{
            letterSpacing: '8px',
            fontSize: '50px',
            marginBottom: '50px',
          }}>
          TESTIMONIALS
        </h1>
        <h1
          className='text-center  d-md-none '
          style={{
            letterSpacing: '8px',
            fontSize: '30px',
            marginBottom: '50px',
          }}>
          TESTIMONIALS
        </h1>

        <Carousel
          interval={4000}
          variant='dark'
          autoPlay
          infiniteLoop
          controls={false}
          indicators={false}
          style={{
            height: 'auto',
            margin: '0 auto',
            maxHeight: '300px',
            marginBottom: '50px',
            width: '80%',
          }}>
          {testimonial.map((item, index) => (
            <Carousel.Item key={index}>
              <blockquote className='blockquote  text-center'>
                <p
                  className='mb-0'
                  style={{width: '80%', margin: '0 auto'}}>
                  {item.content}
                </p>
                <footer className='blockquote-footer text-center mt-3'>{item.author}</footer>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Reviews;
