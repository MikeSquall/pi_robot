import sys
import asyncio
import websockets
import json
from ast import literal_eval
import robot

# Init robot
robot = robot.MY_ROBOT

# Check host & port
if sys.argv and len(sys.argv) == 3:
    host = sys.argv[1]
    port = sys.argv[2]
    print('Running server on ' + str(host) + ':' + str(port))
else:
    sys.exit('Please provide host and port')

# Stop the robot to prevent automatic start from gpiozero
robot.stop()

# Handle command received through websocket
async def handle_command(websocket, path):
    while True:
        message = await websocket.recv()

        message = literal_eval(message)
        print(message)

        if message['command'] == 'moveForward':
            robot.forward()
            answer = {'action': 'moveForward'}
        elif message['command'] == 'moveBackward':
            robot.backward()
            answer = {'action': 'moveBackward'}
        elif message['command'] == 'turnRight':
            robot.right()
            answer = {'action': 'turnRight'}
        elif message['command'] == 'turnLeft':
            robot.left()
            answer = {'action': 'turnLeft'}
        elif message['command'] == 'stop':
            robot.stop()
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
        await websocket.send(json.dumps(answer))

# Start the server
start_server = websockets.serve(handle_command, host, port)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
