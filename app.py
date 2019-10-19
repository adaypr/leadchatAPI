#!flask/bin/python
from flask import Flask, jsonify, request, json, Response

app = Flask(__name__)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    
    x =  '{ "name":"John", "age":30, "city":"New York"}'    
    return Response(json.loads(x), mimetype='application/json') 
    
if __name__ == '__main__':
    app.run(debug=True)
