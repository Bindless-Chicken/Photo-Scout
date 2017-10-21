from flask import Flask, render_template, request
import config
import flickrapi

app = Flask(__name__)

FLICKR = flickrapi.FlickrAPI(config.API_KEY, config.API_SECRET, format='parsed-json')

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
    images = FLICKR.photos.search(text=keywords, per_page='20', sort="interestingness-desc")

    # for image in  images["photos"]["photo"]:

    #     try:
    #         image_exif = FLICKR.photos.getExif(photo_id=image["id"], secret=image["secret"])
    #         lens_info = find(image_exif["photo"]["exif"], "label", "Lens Model")
    #         if lens_info != -1:
    #             print(image_exif["photo"]["exif"][lens_info]["raw"]["_content"])
    #         else:
    #             print("Lens not shared")
    #     except flickrapi.FlickrError:
    #         print("No exif shared?")

    return render_template('results.html', keywords=keywords, images=images["photos"]["photo"])