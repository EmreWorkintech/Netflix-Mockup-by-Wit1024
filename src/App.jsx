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

  return (
    <Container>
      <Header activeProfile={activeProfile} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
