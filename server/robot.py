from gpiozero import Robot, Device
from time import sleep

# Setup robot with gpiozero
MY_ROBOT = Robot(left=(4, 14), right=(17, 18))
