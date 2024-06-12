from flask import Flask
hello_world = Flask(__name__)
@hello_world.route("/")
def run():
    return "{\"message\":\"Hey there python\"}"

if __name__ == "__main__":
    hello_world.run(host="0.0.0.0", port=int("3000"), debug=True)    