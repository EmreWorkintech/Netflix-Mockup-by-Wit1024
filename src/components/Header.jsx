import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: ${(props) =>
    props.loggedUser ? "flex-end" : "space-between"};
  align-items: center;
  gap: 2rem;
  z-index: 100;
`;

const Logo = styled.div`
  color: red;
  font-size: 2rem;
  font-weight: bold;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  color: lightgrey;
  flex-grow: 1;

  & a {
    color: lightgray;
    text-decoration: none;
  }
`;

const UserPanel = styled.div`
  margin: 0 1rem;
`;

const User = styled.img`
  height: 40px;
  border-radius: 0.2rem;
`;

function Header(props) {
  const { activeProfile, loggedUser } = props;

  return (
    <Container loggedUser={loggedUser}>
      <Logo>NETFLIX</Logo>
      {loggedUser && (
        <NavMenu>
          <Link to="/login">Login</Link>
          <Link to="/welcome">Welcome</Link>
          <Link to="/browse">Browse</Link>
        </NavMenu>
      )}
      <UserPanel>
        {loggedUser ? (
          <User src={activeProfile.avatar} />
        ) : (
          <Link to="/signup">Signup</Link>
        )}
      </UserPanel>
    </Container>
  );
}

export default Header;
