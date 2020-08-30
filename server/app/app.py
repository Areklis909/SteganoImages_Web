from helpers import *

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/encode', methods=['POST'])
def encode():
    encoder = ImageEncoder(extractImage())
    encoder.saveImage()
    return encoder.encode(request.form['msg'])

@app.route('/decode', methods=['POST'])
def decode():
    decoder = ImageDecoder(extractImage())
    decoder.saveImage()
    return decoder.decode()

@app.route('/', methods=['GET'])
def hello():
    return 'Hello world'