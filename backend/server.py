from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['cycle_rental_db']
cycles_collection = db['cycles']

# Update availability for a specific cycle
@app.route('/cycles/<cycleId>', methods=['PATCH'])  # Ensure PATCH method is allowed
def update_cycle_availability(cycleId):
    print(f"Updating availability for cycle {cycleId}")  # Log when the route is triggered

    data = request.json
    availability = data.get('available')
    if availability is None:
        return jsonify({'error': 'Availability not provided'}), 400

    # Update availability in MongoDB
    result = cycles_collection.update_one({'_id': ObjectId(cycleId)}, {'$set': {'available': availability}})
    if result.modified_count == 1:
        print(f"Cycle {cycleId} availability updated successfully")  # Log successful update
        return jsonify({'message': 'Cycle availability updated successfully'})
    else:
        print(f"Cycle {cycleId} not found or availability not updated")  # Log update failure
        return jsonify({'error': 'Cycle not found or availability not updated'}), 404

# Get all cycles
@app.route('/cycles', methods=['GET'])
def get_cycles():
    cycles = list(cycles_collection.find())
    for cycle in cycles:
        cycle['_id'] = str(cycle['_id'])  # Convert ObjectId to string
    return jsonify(cycles)

if __name__ == '__main__':
    app.run(debug=True)
