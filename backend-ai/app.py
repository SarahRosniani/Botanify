import numpy as np
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
import mysql.connector

app = Flask(__name__)
CORS(app)
load_dotenv()

# Database connection setup
db = mysql.connector.connect(
    host=os.getenv('DB_HOST'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASSWORD'),
    database=os.getenv('DB_DATABASE')
)
cursor = db.cursor()

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/result', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        
        # Import API from IBM Cloud
        API_KEY = os.getenv('API_KEY')
        token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
        mltoken = token_response.json()["access_token"]
        
        output_class = ['Aglaonema', 'Alyssum', 'Aster', 'Azalea', 'Bergamot', 'Cosmos', 'Dahlia', 'Daisy', 'Dandelion', 'Dieffenbacia',
                        'Euphorbia', 'Eustoma', 'Gerbera', 'Iris', 'Ixora', 'Jasmine', 'Lavender', 'Lily Flower', 'Orchid', 'Pansy', 'Peony',
                        'Polyanthus', 'Rose', 'Sage', 'Snapdragon', 'Sunflower', 'Tuberose', 'Tulip', 'Viola']
        
        def preprocessing_input(file):
            img = Image.open(file)
            img = img.resize((224, 224))
            img = img.convert('RGB')
            img = np.array(img)
            img = np.expand_dims(img, axis=0)
            img = img / 255.0
            return img
        
        def predict_user(file):
            try:
                img = preprocessing_input(file)
                payload_scoring = {"input_data": [{"values": img.tolist()}]}
                header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}
                scoring_url = os.getenv('SCORING_URL')
                response_scoring = requests.post(scoring_url, json=payload_scoring, headers=header)
                
                result = response_scoring.json()['predictions'][0]['values'][0]
                predicted_class_idx = np.argmax(result)
                predicted_class = output_class[predicted_class_idx]
                predicted_probability = result[predicted_class_idx]
                callback = {
                    "category": predicted_class
                }
                return callback
            except Exception as e:
                print(f"Error: {e}")
                callback_error = {
                    "category": "Not found"
                }
                return callback_error   
        
        def insert_prediction(category):
            try:
                sql = "INSERT INTO predictions (category) VALUES (%s)"
                cursor.execute(sql, (category,))
                db.commit()
                print("Prediction inserted successfully!")
            except Exception as e:
                print(f"Error inserting prediction into database: {e}")
        
        try:
            prediction_result = predict_user(file)
            insert_prediction(prediction_result['category'])
            return jsonify(prediction_result)
        except Exception as e:
            print(f"Error: {e}")
            return "<h1>Error System</h1>"

if __name__ == '__main__':
    app.run(debug=True)




# import numpy as np
# from PIL import Image
# from flask import Flask, request, render_template, jsonify
# from flask_cors import CORS
# import requests
# import os
# from dotenv import load_dotenv

# app = Flask(__name__)
# CORS(app)

# load_dotenv()

# @app.route('/')
# def index():
#     return 'Hello World!'

# @app.route('/result', methods=['POST'])
# def upload_file():
#     if request.method == 'POST':
#         file = request.files['file']
        
#         # Import API from IBM Cloud
#         API_KEY = os.getenv('API_KEY')
#         token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
#         mltoken = token_response.json()["access_token"]
        
#         # Process image classifications
#         output_class = ['Aglaonema', 'Alyssum', 'Aster', 'Azalea', 'Bergamot', 'Cosmos', 'Dahlia', 'Daisy', 'Dandelion', 'Dieffenbacia',
#                         'Euphorbia', 'Eustoma', 'Gerbera', 'Iris', 'Ixora', 'Jasmine', 'Lavender', 'Lily Flower', 'Orchid', 'Pansy', 'Peony',
#                         'Polyanthus', 'Rose', 'Sage', 'Snapdragon', 'Sunflower', 'Tuberose', 'Tulip', 'Viola']
        
#         def preprocessing_input(file):
#             img = Image.open(file)
#             img = img.resize((224, 224))  # resize image
#             img = img.convert('RGB')  # ensure image is in RGB format
#             img = np.array(img)
#             img = np.expand_dims(img, axis=0)  # add batch dimension
#             img = img / 255.0  # normalize to [0, 1]
#             return img
        
#         # Prediction image classification
#         def predict_user(file):
#             try:
#                 img = preprocessing_input(file)
#                 # Prepare payload for IBM Cloud
#                 payload_scoring = {"input_data": [{"values": img.tolist()}]}
#                 header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}
#                 scoring_url = os.getenv('SCORING_URL')
#                 response_scoring = requests.post(scoring_url, json=payload_scoring, headers=header)
                
#                 # Response result from IBM
#                 result = response_scoring.json()['predictions'][0]['values'][0]
#                 predicted_class_idx = np.argmax(result)
#                 predicted_class = output_class[predicted_class_idx]
#                 predicted_probability = result[predicted_class_idx]
#                 callback = {
#                     "accuracy": f"{predicted_probability:.2%}",
#                     "category": predicted_class,
#                     "name": file.filename
#                 }
#                 print(callback, "\n")
#                 return callback
#             except Exception as e:
#                 print(f"Error: {e}")
#                 callback_error = {
#                     "accuracy": "-%",
#                     "category": "Not found",
#                     "name": file.filename
#                 }
#                 print(callback_error, "\n")
#                 return callback_error   
        
#         try:
#             return jsonify(predict_user(file))
#         except Exception as e:
#             print(f"Error: {e}")
#             return "<h1>Error System</h1>"

# if __name__ == '__main__':  
#     app.run(debug=True)
