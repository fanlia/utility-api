import os
import time
import sys
from waitress import serve
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello Python!"

port = os.getenv('PORT', 5000)

if __name__ == "__main__":
    print("server started at http://localhost:{} [{}][python:{}]".format(port, time.asctime(), sys.version))
    serve(app, host='0.0.0.0', port=port)
