from photo_scout import app
from flask_scss import Scss

Scss(app, static_dir='photo_scout/static', asset_dir='photo_scout/assets')

app.run()