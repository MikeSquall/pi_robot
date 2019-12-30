import asyncio
import websockets
import json
# import robot

# robot = robot.MY_ROBOT


async def handle_command(websocket, path):
    while True:
        try:
            message = json.loads(await websocket.recv())
        except websockets.ConnectionClosed:
            pass

        if message['command'] == 'moveForward':
            # robot.forward()
            answer = {'action': 'moveForward'}
        elif message['command'] == 'moveBackward':
            # robot.backward()
            answer = {'action': 'moveBackward'}
        elif message['command'] == 'turnRight':
            # robot.right()
            answer = {'action': 'turnRight'}
        elif message['command'] == 'turnLeft':
            # robot.left()
            answer = {'action': 'turnLeft'}
        elif message['command'] == 'stop':
            # robot.stop()
            answer = {'action': 'stop'}
        elif message['command'] == 'grabberGrab':
            # grabber action grab
            answer = {'action': 'grabberGrab', 'value': message['value']}
        elif message['command'] == 'grabberTilt':
            # grabber action tilt
            answer = {'action': 'grabberTilt', 'value': message['value']}
        elif message['command'] == 'grabberHeight':
            # grabber action height
            answer = {'action': 'grabberHeight', 'value': message['value']}
        await websocket.send(answer)

start_server = websockets.serve(handle_command, "localhost", 5000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
