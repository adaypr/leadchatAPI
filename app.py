#!flask/bin/python
from flask import Flask, jsonify, request, json, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    #x =  '{ "name":"John", "age":30, "city":"New York"}'
    x = '{  "data": [    {      "text": "Yeahhh Aday. Its works!",      "reply": false,      "date": "2019-10-19T19:57:45.465Z",      "user": {        "name": "John Doe",        "avatar": "https://i.gifer.com/no.gif"      }    }  ]}'
    return json.loads(x) 
    
if __name__ == '__main__':
    app.run(debug=True)
