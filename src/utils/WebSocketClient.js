class WebSocketClient {
    constructor(url) {
      this.url = url;
      this.connection = null;
    }
  
    connect() {
      this.connection = new WebSocket(this.url);
      
      this.connection.onopen = () => {
        console.log('WebSocket connection established');
      };
  
      this.connection.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
      };
  
      this.connection.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      this.connection.onclose = () => {
        console.log('WebSocket connection closed');
      };
    }
  }
  
  export default WebSocketClient;
  
  // Usage in another file
  import WebSocketClient from '../utils/WebSocketClient';
  
  const wsClient = new WebSocketClient('wss://legendary-space-couscous-x7gjw6qxqw53v59v-3001.app.github.dev:3001/ws');
  wsClient.connect();
  