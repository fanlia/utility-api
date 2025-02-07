import os
from flask import Flask

import logging
log = logging.getLogger('werkzeug')
log.disabled = True

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello Python!"

port = os.getenv('PORT', 5000)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)
