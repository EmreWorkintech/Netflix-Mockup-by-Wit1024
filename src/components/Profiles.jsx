import { profileData } from "../dummyData";
import styled from "styled-components";
import Profile from "./Profile";

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function Profiles(props) {
  const { setActiveProfile } = props;
  return (
    <Container>
      {profileData.map((item) => (
        <Profile
          key={item.id}
          profile={item}
          setActiveProfile={setActiveProfile}
        />
      ))}
    </Container>
  );
}

export default Profiles;
