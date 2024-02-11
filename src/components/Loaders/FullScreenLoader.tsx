import { BeatLoader } from 'react-spinners';

const FullScreenLoader = () => {
  return (
    <div
      style={{
        backgroundColor: '#000000bd',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <BeatLoader size={30} color='blue' />
    </div>
  );
};

export default FullScreenLoader;
