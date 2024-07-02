import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Header />
    <main id="main-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  </ThemeProvider>
);

export default App;
