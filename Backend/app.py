from quart import Quart
from quart_cors import cors
from routes import bp

app = Quart(__name__)
app = cors(app, allow_origin="*")

app.register_blueprint(bp)

if __name__ == "__main__":
    app.run()
