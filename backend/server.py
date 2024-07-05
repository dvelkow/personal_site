from flask import Flask, request, jsonify, send_file
import json

app = Flask(__name__)

activity_data = {
    'left_clicks': 0,
    'right_clicks': 0,
    'middle_clicks': 0,
    'keypresses': 0,
    'mouse_movement': 0
}

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/update_activity', methods=['POST'])
def update_activity():
    global activity_data
    activity_data = request.json
    with open('activity_data.json', 'w') as f:
        json.dump(activity_data, f)
    return jsonify({"status": "success"})

@app.route('/get_activity')
def get_activity():
    return jsonify(activity_data)

if __name__ == '__main__':
    try:
        with open('activity_data.json', 'r') as f:
            activity_data = json.load(f)
    except FileNotFoundError:
        pass
    app.run(port=8000)