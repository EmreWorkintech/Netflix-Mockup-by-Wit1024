import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  z-index: 100;
`;

const Logo = styled.div`
  color: red;
  font-size: 2rem;
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
  const { activeProfile } = props;

  return (
    <Container>
      <Logo>NETFLIX</Logo>
      <NavMenu>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/browse">Browse</Link>
      </NavMenu>
      <UserPanel>
        <User src={activeProfile.avatar} />
      </UserPanel>
    </Container>
  );
}

export default Header;
