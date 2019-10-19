#!flask/bin/python
from flask import Flask, jsonify, request, json, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    x =  '{ "name":"John", "age":30, "city":"New York"}'   
    
    x = '{ "data": [{
    "text": "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
    "reply": "false",
    "date": "20/10/2019",
    "user": {
      "name": "John Doe",
      "avatar": "https://i.gifer.com/no.gif",
    }
      ]}'
    
    
    return json.loads(x) 
    
if __name__ == '__main__':
    app.run(debug=True)
