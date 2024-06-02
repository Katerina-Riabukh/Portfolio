// import Photo from '../images/My-photo.png';
import PhotoRevers from '../images/MyPhotoRevers.png';
import { Container, PhotoBlock } from './main.styled';

const Welcome = () => {
  return (
    <Container>
      <h1 style={{ color: 'black' }}>Welcome to my world</h1>
      <PhotoBlock>
        <img src={PhotoRevers} alt="me" width={300} />
      </PhotoBlock>
    </Container>
  );
};

export default Welcome;
