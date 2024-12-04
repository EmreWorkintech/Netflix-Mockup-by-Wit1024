import styled from "styled-components";
import asaf from "../assets/videos/asaf.mp4";

const Container = styled.main`
  position: relative;
`;

const Video = styled.video`
  width: 100vw;
  aspect-ratio: 16/9;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  border: 3px solid white;
  width: 50%;
  aspect-ratio: 5/3;
`;
function Hero() {
  return (
    <Container>
      <InfoContainer>
        <Info>Buraya film bilgileri gelecek</Info>
      </InfoContainer>
      <Video autoPlay muted loop>
        <source src={asaf} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Container>
  );
}

export default Hero;
