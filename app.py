#!flask/bin/python
from flask import Flask, jsonify, request, json, Response
from flask_socketio import SocketIO,send, emit
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__)
CORS(app)
#socketio = SocketIO(app)
socketio = SocketIO(app, cors_allowed_origins="*", engineio_logger=True, pingInterval = 10000000, pingTimeout= 5000000)

@socketio.on('connect')
def test_connect():	
    #emit('test event', {'data': 'Connected'})
	emit('test event',{  "data": [    {      "text": "Aday, it works!!!",      "reply": False,      "date":"2019-10-19T20:57:45.465Z",      "user": {        "name": "John Doe",        "avatar": "https://i.gifer.com/no.gif"      }    }  ]})
	
@socketio.on('sentMsg')
def handle_my_custom_event(arg1):
    print('received args: ' + arg1)
# --------- Lead Messages ---------

@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    #x =  '{ "name":"John", "age":30, "city":"New York"}'
	
    #x = '{  "data": [    {      "text": "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",      "reply": false,      "date": "2019-10-19T19:57:45.465Z",      "user": {        "name": "John Doe",        "avatar": "https://i.gifer.com/no.gif"      }    }  ]}'
    #x = '{"data":"prueba"}';
	print('Dentro')
	data = request.form
	return json.loads(data) 	
	
@app.route('/leadmessage', methods=['POST'])
def post_message():	
	data = request.json
	print('Mensaje Posteado' + data["data"])
	socketio.emit('post message',{  "data": [    {      "message": data["data"],      "reply": False,      "date":"2019-10-19T20:57:45.465Z",      "user": {        "name": "John Doe",        "avatar": "https://i.gifer.com/no.gif"      }    }  ]})	
	return data
if __name__ == '__main__':
    app.run(debug=True)
