export const ws = (): WebSocket | undefined => {
  let socket: WebSocket | undefined;
  try {
    socket = new WebSocket('ws://echo.websocket.org');
  }
  catch (e) {
    socket = undefined;
  }

  if (socket) {
    socket.onclose = () => console.log('close before open');
    socket.onopen = (event) => {
      console.info('event ', event.type);
      socket!.onclose = () => {
        console.info('close connection');
      };
      socket!.onmessage = (data) => {
        console.info('Message: ', data.data);
      };
    };
  }

  return socket;
};
