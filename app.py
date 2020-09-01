from flask import Flask,render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/chillbox")
def chillbox():
    return render_template("chillbox.html")


@app.route("/musicrecommendations")
def musicrec():
    return render_template("musicrec.html")



@app.route("/credits")
def credits():
    return render_template("credits.html")