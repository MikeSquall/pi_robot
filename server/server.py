import asyncio
import websockets
# import robot

# robot = robot.MY_ROBOT


async def robot_commands(websocket, path):


start_server = websockets.serve(robot_commands, "localhost", 5000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
