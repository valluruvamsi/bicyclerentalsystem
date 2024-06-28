from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['cycle_rental_db']
cycles_collection = db['cycles']

# Get all cycles
@app.route('/cycles', methods=['GET'])
def get_cycles():
    cycles = list(cycles_collection.find())
    for cycle in cycles:
        cycle['_id'] = str(cycle['_id'])  # Convert ObjectId to string
    return jsonify(cycles)

if __name__ == '__main__':
    app.run(debug=True)
