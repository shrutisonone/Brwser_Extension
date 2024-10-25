from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/data')
def fetch_data():
    url = 'https://api.example.com/data'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Failed to fetch data'}), 500

if __name__ == '__main__':
    app.run(debug=True)