#!flask/bin/python
from flask import Flask, jsonify, request, json

app = Flask(__name__)


# --------- Lead Messages ---------
@app.route('/leadmessage', methods=['GET'])
def get_tasks():
    token_sent = [
  {
    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: false,
    date: new Date(),
    user: {
      name: 'John Doe',
      avatar: 'https://i.gifer.com/no.gif',
    },
  }]
    return token_sent
    
if __name__ == '__main__':
    app.run(debug=True)
