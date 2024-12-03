import styled from "styled-components";
import Profiles from "../components/Profiles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  color: lightgray;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
`;

const ManageProfiles = styled(Link)`
  border: 1px solid gray;
  padding: 0.6rem 2.5rem;
  color: gray;
  margin-top: 1.5rem;
  text-decoration: none;
`;

function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <Container>
      <Title>Who&apos;s watching?</Title>
      <Profiles setActiveProfile={setActiveProfile} />
      <ManageProfiles to="/manage/profiles">Manage Profiles</ManageProfiles>
    </Container>
  );
}

export default Welcome;
