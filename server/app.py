from flask import Flask
from flask import request
from flask import send_from_directory, abort, make_response, send_file
from flask_cors import CORS
import hashlib
import time
import imghdr
import subprocess
import io
import secrets

class NoImageException(Exception):

    def __init__(self, message='Image not found in the message'):
        self.message = message
        super().__init__(self.message)


class IncorrectImageFormatException(Exception):

    def __init__(self, formats, message="Format of the image is not correct. Accepted formats: "):
        self.message = message + str(formats)
        super().__init__(self.message)


class ImageHandler:

    def __init__(self, image, path, outputPath):
        self.acceptedFormats = ['jpg', 'png', 'bmp']
        self.formatMap = {
            'jpg' : 'bmp',
            'png' : 'png',
            'bmp' : 'bmp'
        }
        self.encoding = 'utf-8'
        self.image = image
        self.dir = path
        self.outDir = outputPath
        self.basename = ''
        self.ext = ''
        self.fullPath = ''
        if(self.dir[-1] != '/'):
            self.dir.append('/')

        if(self.formatOk() == False):
            raise IncorrectImageFormatException(self.acceptedFormats)

    def hashImage(self, hashData):
        sha = hashlib.sha256(self.image.filename.encode(self.encoding) + hashData.encode(self.encoding) +
                             str(time.time_ns()).encode(self.encoding))
        return sha.hexdigest()

    def saveImage(self, hashData):
        self.basename = self.hashImage(hashData)
        self.fullPath = self.dir + self.basename + '.' + self.getFormat()
        self.image.save(self.fullPath)

    def formatOk(self):
        self.ext = self.image.filename.split('.')[1]
        return self.ext in self.acceptedFormats

    def getFormat(self):
        return self.formatMap[self.ext]

    def getFullPath(self):
        return self.fullPath

    def getBasename(self):
        return self.basename

    def getOutputBasename(self):
        return self.getBasename() + '_output' + '.' + self.getFormat()

    def getRawBasename(self):
        return self.getBasename() + '_output' + '.' + self.ext

    def getOutputFilename(self):
        return self.outDir + self.getOutputBasename()

    def getRawOutputFilename(self):
        return self.outDir + self.getRawBasename()


def extractImage():
    if(len(request.files) == 0):
        raise NoImageException()
    return request.files['image']


app = Flask(__name__)
CORS(app)

@app.route('/encode', methods=['POST'])
def encode():
    outputPath = 'output_images/'
    inputPath = 'images/'
    imageHandler = ImageHandler(extractImage(), inputPath, outputPath)
    msg = request.form['msg']
    imageHandler.saveImage(msg)
    subprocess.call(['../../build_stegano/src/stegano', '--mode', 'encoding', '--input',
                     imageHandler.getFullPath(), '--output', imageHandler.getOutputFilename(), '--message', msg])
    response = send_from_directory(outputPath, imageHandler.getOutputBasename(), as_attachment=True)
    response.headers['Access-Control-Expose-Headers'] = 'Content-Disposition'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Disposition'
    subprocess.call(['rm', imageHandler.getFullPath()])
    return response


@app.route('/decode', methods=['POST'])
def decode():
    inputPath = 'to_decode/'
    decodedPath = 'decoded/'
    imageHandler = ImageHandler(extractImage(), inputPath, '')
    imageHandler.saveImage(secrets.token_hex(16))
    outputFile = decodedPath + imageHandler.getOutputBasename()
    subprocess.call(['../../build_stegano/src/stegano', '--mode', 'decoding', '--input',
                imageHandler.getFullPath(), '--message-file', outputFile])
    with open(outputFile) as f:
        data = f.read()
    subprocess.call(['rm', imageHandler.getFullPath()])
    return data
