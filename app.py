#!flask/bin/python
from flask import Flask, jsonify, request, json

app = Flask(__name__)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    x =  '{ "name":"John", "age":30, "city":"New York"}'
    return json.loads(x)
    
if __name__ == '__main__':
    app.run(debug=True)
