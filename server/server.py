from flask import Flask
import robot

robot = robot.MY_ROBOT
app = Flask(__name__)



@app.route('/move/forward/')
def move_forward():
    robot.forward()
    return "move_forward"


@app.route('/move/backward/')
def move_backward():
    robot.backward()
    return "move_backward"


@app.route('/move/turn/right/')
def move_turn_right():
    robot.right()
    return "move_turn_right"


@app.route('/move/turn/left/')
def move_turn_left():
    robot.left()
    return "move_turn_left"


@app.route('/stop/')
def stop():
    robot.stop()
    return "stop"


@app.route('/grabber/grab/<opened>')
def grabber_open(opened):
    return "grabber_grab: opened ? %s" % opened



@app.route('/grabber/position/<height>')
def grabber_position(height):
    return "grabber_position: %s" % height


@app.route('/grabber/tilt/<angle>/')
def grabber_tilt(angle):
    return "grabber_tilt: %s" % angle


if __name__ == "__main__":
    app.run()
