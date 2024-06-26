import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Chat from './components/Chat/Chat';
import Registration from './components/Registration/Registration';
import './assets/styles/App.css';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #61dafb;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <h1>Welcome to PrivatePing</h1>
        </Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/registration">Registration</NavLink>
        </Nav>
        <Switch>
          <Route exact path="/" component={() => <div>Home Page</div>} />
          <Route path="/chat" component={Chat} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
