from flask import Flask, render_template, request
import config
import flickrapi
from flask_cors import CORS
import json
import datetime

app = Flask(__name__)
CORS(app)

FLICKR = flickrapi.FlickrAPI(config.API_KEY, config.API_SECRET, format='parsed-json')

class Image():
    ''' A unified class across all photo services'''
    def __init__(self):
        self.Title = ""
        self.Url = ""
        self.Id = 0
        self.Secret = 0
        self.Lat = 0.0
        self.Lon = 0.0
        self.Lens = ""
        self.Taken = 0
        self.Owner = ""

    def ImportFlickr(self, image):
        self.Title = image["title"];
        self.Id = image["id"]
        self.Secret = image["secret"]
        self.Url = "https://farm" + str(image["farm"]) + ".staticflickr.com/" + str(image["server"]) + "/" + str(image["id"]) + "_" + str(image["secret"]) + ".jpg"
        self.Lat = image["latitude"]
        self.Lon = image["longitude"]
        self.Owner = image["ownername"]
        # (self.Lat, self.Lon) = self.GetLocationFlickr()
        # self.Lens = self.GetLensFlickr()
        # self.Taken = self.GetInfoFlickr()
        self.Taken = image["datetaken"]

    def GetLocationFlickr(self):
        try:
            image_location = FLICKR.photos.geo.getLocation(photo_id=self.Id, secret=self.Secret)
            return [image_location["photo"]["location"]["latitude"], image_location["photo"]["location"]["longitude"]]
        except flickrapi.FlickrError:
            return [0.0, 0.0]

    def GetLensFlickr(self):
        try:
            image_exif = FLICKR.photos.getExif(photo_id=self.Id, secret=self.Secret)
            lens_info = find(image_exif["photo"]["exif"], "label", "Lens Model")
            return "Unknown" if lens_info == -1 else image_exif["photo"]["exif"][lens_info]["raw"]["_content"]
        except flickrapi.FlickrError:
            return "Unknown"

    def GetInfoFlickr(self):
        try:
            image_info = FLICKR.photos.getInfo(photo_id=self.Id, secret=self.Secret)
            return image_info["photo"]["dates"]["taken"]
        except flickrapi.FlickrError:
            return "Unknown"


def find(lst, key, value):
    for i, dic in enumerate(lst):
        if value in dic[key]:
            return i
    return -1

@app.route("/")
def main():
    return render_template('main.html')

@app.route("/results")
def results():
    keywords = request.args.get('keywords')

    try:
        images = FLICKR.photos.search(text=keywords, per_page='60', sort="relevance", content_type=1, extras="geo,date_taken,owner_name")
    except flickrapi.FlickrError:
        print("Error while getting the images")

    imageList = []

    for image in images["photos"]["photo"]:
        tempImage = Image()
        tempImage.ImportFlickr(image)
        imageList.append(tempImage)

    return "[%s]" % ",\n ".join(json.dumps(e.__dict__) for e in imageList)