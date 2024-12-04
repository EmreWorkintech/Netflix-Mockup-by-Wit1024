/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, 0);
`;

const Card = styled.div`
  padding: 0.4rem;
  width: 180px;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover ${Avatar} {
    border: 3px solid lightgray;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: lightgrey;
  font-weight: 400;
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  const { avatar, title } = profile;
  const history = useHistory();

  function clickHandler() {
    setActiveProfile(profile);
    history.push("/browse");
  }

  return (
    <Card onClick={clickHandler}>
      <Avatar src={avatar} />
      <Title>{title}</Title>
    </Card>
  );
}

export default Profile;
