interface wsOptions {
  open?: () => void;
  close?: () => void;
  message?: () => void;
  serverUrl: string;
}

export const ws = (options: wsOptions): WebSocket | undefined => {
  let socket: WebSocket | undefined;
  try {
    socket = new WebSocket(options.serverUrl);
  }
  catch (e) {
    socket = undefined;
  }

  if (socket) {
    socket.onclose = () => options && options.close && options.close() && console.log('Closed before open.');
    socket.onopen = (event) => {
      console.info(event.type);
      socket!.onclose = () => {
        options && options.close && options.close();
        console.info('Close connection.');
      };
      socket!.onmessage = (data) => {
        console.info('Message: ', data.data);
      };
    };
  }

  return socket;
};
