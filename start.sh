#!/usr/bin/env bash

USAGE="""
This script assumes all dependencies have been installed.
Usage: ./start --ip 192.168.1.42 --port 3000
    -i --ip
        The ip you want to start the server on (default 127.0.0.1).
    -p --port
        The port you want to start the server on (default 5000).
"""

DEFAULT_IP="127.0.0.1"
DEFAULT_PORT="5000"

function ctrl_c() {
        echo "** Stop server and webapp **"
        kill -9 $SERVER_PID
        kill -9 $WEBAPP_PID
        exit 0
}

main(){
      if [ -z $SERVER_IP ]; then IP="$DEFAULT_IP"; else IP="$SERVER_IP"; fi
      if [ -z $SERVER_PORT ]; then PORT="$DEFAULT_PORT"; else PORT="$SERVER_PORT"; fi

      # Start backend server and store pid
      python3 server/server.py $IP $PORT &
      SERVER_PID=$!

      # Start webapp and store pid
      cd webapp && pwd && yarn install
      yarn start &
      WEBAPP_PID=$!

      # trap ctrl-c and call ctrl_c()
      trap ctrl_c INT
    }

while [[ $# -gt 1 ]]; do

    arg="$1"
    value="$2"
    case $arg in
        -i|--ip)
            SERVER_IP="$value"
            shift
            ;;
        -p|--port)
            SERVER_PORT="$value"
            shift
            ;;
        *)
            echo "Invalid argument $arg."
            return 1
            ;;
    esac
    shift
done

main "$@"
