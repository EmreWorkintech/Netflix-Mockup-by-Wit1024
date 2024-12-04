import "./App.css";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import Header from "./components/Header";
import styled from "styled-components";
import { useState } from "react";
import { profileData } from "./dummyData";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #1c1c1c;
  padding-bottom: 10vh;
`;

function App() {
  const [activeProfile, setActiveProfile] = useState(profileData[0]);
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <Container>
      <Header activeProfile={activeProfile} loggedUser={loggedUser} />
      <Switch>
        <Route exact path="/">
          {loggedUser ? <Redirect to="/welcome" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/welcome">
          {loggedUser ? (
            <Welcome setActiveProfile={setActiveProfile} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/browse">
          {loggedUser ? <Browse /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
