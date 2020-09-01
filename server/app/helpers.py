import hashlib
import time
import imghdr
import subprocess
import io
import secrets
from flask import Flask, request, send_from_directory
from flask_cors import CORS

def extractImage():
    if(len(request.files) == 0):
        raise NoImageException()
    return request.files['image']

class NoImageException(Exception):
    def __init__(self, message='Image not found in the message'):
        self.message = message
        super().__init__(self.message)

class IncorrectImageFormatException(Exception):
    def __init__(self, formats, message="Format of the image is not correct. Accepted formats: "):
        self.message = message + str(formats)
        super().__init__(self.message)

class ImageNotSavedException(Exception):
    def __init__(self, message="File is not saved!"):
        super().__init__(message)

class ImageHandler:
    def __init__(self, image, path):
        self.acceptedFormats = ['jpg', 'png', 'bmp']
        self.formatMap = {
            'jpg': 'bmp',
            'png': 'png',
            'bmp': 'bmp'
        }
        self.encoding = 'utf-8'
        self.image = image
        self.basename = ''
        self.fullPath = ''
        self.binary = '../../../build_stegano/src/stegano'
        self.sanityCheck(path)

    def sanityCheck(self, path):
        if path[-1] == '/':
            path = path + '/'
        self.path = path
        if self.formatOk() == False:
            raise IncorrectImageFormatException(self.acceptedFormats)

    def formatOk(self):
        self.ext = self.image.filename.split('.')[1]
        return self.ext in self.acceptedFormats

    def getFormat(self):
        return self.formatMap[self.ext]

    def hashImage(self):
        hashData = secrets.token_hex(16)
        sha = hashlib.sha256(self.image.filename.encode(self.encoding) + hashData.encode(self.encoding) +
                             str(time.time_ns()).encode(self.encoding))
        return sha.hexdigest()
    
    def getBasename(self):
        return self.basename

    def getOutputBasename(self):
        return self.getBasename() + '_output' + '.' + self.getFormat()

    def getFullPath(self):
        if self.fullPath == '':
            raise ImageNotSavedException()
        return self.fullPath

    def saveImage(self):
        self.basename = self.hashImage()
        self.fullPath = self.path + self.basename + '.' + self.getFormat()
        print('Saving image: ' + self.fullPath)
        self.image.save(self.fullPath)

class ImageEncoder(ImageHandler):
    def __init__(self, image):
        self.outputPath = '../output_images/'
        self.inputPath = '../images/'
        self.exposeHeaders = 'Access-Control-Expose-Headers'
        self.allowHeaders = 'Access-Control-Allow-Headers'
        self.contentDisposition = 'Content-Disposition'
        super().__init__(image, self.inputPath)

    def getOutputFilename(self):
        return self.outputPath + self.getOutputBasename()

    def encode(self, msg):
        subprocess.call([self.binary, '--mode', 'encoding', '--input',
                         self.getFullPath(), '--output', self.getOutputFilename(), '--message', msg])
        response = send_from_directory(self.outputPath, self.getOutputBasename(), as_attachment=True)
        response.headers[self.exposeHeaders] = self.contentDisposition
        response.headers[self.allowHeaders] = self.contentDisposition
        subprocess.call(['rm', self.getFullPath()])
        return response


class ImageDecoder(ImageHandler):
    def __init__(self, image):
        self.inputPath = '../to_decode/'
        self.decodedPath = '../decoded/'
        super().__init__(image, self.inputPath)

    def getOutputFullPath(self):
        return self.decodedPath + self.getOutputBasename()

    def decode(self):
        outputFile = self.getOutputFullPath()
        subprocess.call([self.binary, '--mode', 'decoding', '--input',
                self.getFullPath(), '--message-file', outputFile])
        with open(outputFile) as f:
            data = f.read()
        subprocess.call(['rm', self.getFullPath()])
        return data