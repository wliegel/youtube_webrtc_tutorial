export const environment = {
  production: true,
  wsEndpoint: 'wss://<replace with your own remote signalling server address>:443/ws/',
  RTCPeerConfiguration: {
    iceServers: [
      {
        urls: 'turn:turnserver:3478',
        username: 'user',
        credential: 'password'
      }
    ]
  }
};
