import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import firstlogo from '../../assets/photos/Pulte_Group_updated_logo.png';
import secondlogo from '../../assets/photos/Realty_ONE_Group_Logo_Black_Text.png';
import thirdlogo from '../../assets/photos/REAX_BIG.png';
import fourthlogo from '../../assets/photos/Noble_Logo_Final_Blk.png';

const Brands = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };
  return (
    <>
      <div className=' d-none d-md-block '>
        <Carousel
          responsive={responsive}
          interval={20000}
          arrows={false}
          infinite={true}
          autoPlay={true}>
          <img
            src={firstlogo}
            style={{
              width: '300px',
              height: '80px',
              padding: '15px',
              marginTop: '18px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={secondlogo}
            style={{
              width: '400px',
              height: '100px',
              padding: '5px',
              marginTop: '18px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={thirdlogo}
            style={{
              width: '300px',
              height: '40px',
              marginTop: '45px',
              padding: '5px',

              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
          <img
            src={fourthlogo}
            style={{
              width: '500px',
              height: '120px',
              padding: '5px',
              marginTop: '12px',
              objectFit: 'contain',
              background: 'none',
              border: 'none',
            }}
            alt=' '
          />
        </Carousel>
      </div>
    </>
  );
};

export default Brands;
