from flask import Flask
from flask_socketio import SocketIO, emit
# import robot

# robot = robot.MY_ROBOT
app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('connect')
def handle_connect():
    print('connected')
    emit('connectionStatus', {'data': 'Connected'})


@socketio.on('disconnect')
def handle_connect():
    emit('connectionStatus', {'data': 'Disconnected'})


@socketio.on('moveForward')
def move_forward():
    # robot.forward()
    emit('moveStatus', {'data': 'forward'})


@socketio.on('moveBackward')
def move_backward():
    # robot.backward()
    emit('moveStatus', {'data': 'backward'})


@socketio.on('moveTurnRight')
def move_turn_right():
    # robot.right()
    emit('moveStatus', {'data': 'turnRight'})


@socketio.on('moveTurnLeft')
def move_turn_left():
    # robot.left()
    emit('moveStatus', {'data': 'turnLeft'})


@socketio.on('moveStop')
def stop():
    # robot.stop()
    emit('moveStatus', {'data': 'stop'})


@socketio.on('grabberGrab')
def grabber_open(angle):
    emit('grabberGrab', {'data': angle})


@socketio.on('grabberPosition')
def grabber_position(height):
    emit('grabberPosition', {'data': height})


@socketio.on('grabberTilt')
def grabber_tilt(angle):
    emit('grabberTilt', {'data': angle})


if __name__ == "__main__":
    socketio.run(app)
