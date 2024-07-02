import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Chat = () => (
  <ChatPageContainer>
    <Sidebar />
    <ChatWindow />
  </ChatPageContainer>
);

export default Chat;
