#!flask/bin/python
from flask import Flask, jsonify, request, json, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    #x =  '{ "name":"John", "age":30, "city":"New York"}'
    x = '{"data": [{"text": "Yeahhh Aday. Its works!","reply": false,"date": "2019-10-19T19:57:45.465Z","user": {"name": "Aday Perera","avatar": "https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg"}}, {"text": "Mi respuesta","reply": true,"date": "2019-10-19T20:57:45.465Z","user": {"name": "Kai Lenny","avatar": "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/24796315_10155998989794312_1964191819925532910_n.jpg?_nc_cat=1&_nc_oc=AQnVRfzkGehB1S98rKdVTMCl5uTXqlrPTSmwTRv3TXruJC9uQKdgTtQvoNzjoK5GeNs&_nc_ht=scontent-lht6-1.xx&oh=e82c572c8920bb26b1fda8f6725b10af&oe=5E28B586"}}]}'
    return json.loads(x) 
    
if __name__ == '__main__':
    app.run(debug=True)
