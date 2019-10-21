#!flask/bin/python
from flask import Flask, jsonify, request, json, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    #x =  '{ "name":"John", "age":30, "city":"New York"}'
    x = '{"data": [{"text": "Yeahhh Aday. Its works!","reply": false,"date": "2019-10-19T19:57:45.465Z","user": {"name": "Aday Perera","avatar": "https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg"}}, {"text": "Mi respuesta","reply": true,"date": "2019-10-19T20:57:45.465Z","user": {"name": "Aday Perera","avatar": "hhttps://www.windsurf.co.uk/wp-content/uploads/2019/04/5W9A1337-631x420.jpg"}}]}'
    return json.loads(x) 
    
if __name__ == '__main__':
    app.run(debug=True)
