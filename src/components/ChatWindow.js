import React from 'react';
import styled from 'styled-components';
import { Box, TextField, Button } from '@mui/material';
import { Grid } from '@mui/material';

const ChatContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
`;

const MessageArea = styled(Box)`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f4f6f8;
`;

const MessageInputContainer = styled(Box)`
  display: flex;
  padding: 16px;
  border-top: 1px solid #ddd;
  background-color: #fff;
`;

const ChatWindow = () => (
  <ChatContainer>
    <MessageArea>
      {/* Messages will be displayed here */}
    </MessageArea>
    <MessageInputContainer>
      <TextField
        variant="outlined"
        placeholder="Type a message..."
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" margin="normal">
        Send
      </Button>
    </MessageInputContainer>
  </ChatContainer>
);

export default ChatWindow;
