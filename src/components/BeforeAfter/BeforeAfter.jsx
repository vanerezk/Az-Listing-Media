import before from '../../assets/photos/2244 W Madre Del Oro Virtual Stage-1 2.jpg';
import after from '../../assets/photos/2244 W Madre Del Oro Virtual Stage-2 2.jpg';
import ReactCompareImage from 'react-compare-image';

const BeforeAfter = () => {
  return (
    <ReactCompareImage
      leftImage={before}
      rightImage={after}
      leftImageCss={{
        width: '100%',
        height: '450px',
        borderRadius: '15px ',
      }}
      rightImageCss={{
        width: '100%',
        height: '450px',
        borderRadius: '15px',
      }}
    />
  );
};

export default BeforeAfter;
