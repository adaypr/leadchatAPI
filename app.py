#!flask/bin/python
from flask import Flask, jsonify, request, json

app = Flask(__name__)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    token_sent = 'Hola'
    return token_sent
    
if __name__ == '__main__':
    app.run(debug=True)
