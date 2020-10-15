from helpers import *

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

@app.route('/encode', methods=['POST'])
def encode():
    try:
        encoder = ImageEncoder(extractImage())
        encoder.saveImage()
        return encoder.encode(request.form['msg'])
    except subprocess.CalledProcessError as e:
        ret = str(e.output.decode('ascii'))
        return ret, 500
    except (IncorrectImageFormatException, NoImageException, ImageNotSavedException) as e:
        ret = str(e.message)
        return ret, 500

@app.route('/decode', methods=['POST'])
def decode():
    try:
        decoder = ImageDecoder(extractImage())
        decoder.saveImage()
        return decoder.decode()
    except subprocess.CalledProcessError as e:
        ret = str(e.output.decode('ascii'))
        return ret, 500
    except (IncorrectImageFormatException, NoImageException, ImageNotSavedException) as e:
        ret = str(e.message)
        return ret, 500

@app.route('/', methods=['GET'])
def hello():
    return 'OK', 200