from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import configparser

# Create a ConfigParser object
config = configparser.ConfigParser()

# Read the configuration file
config.read('config.ini')

# Set the Google Gemini API key
google_gemini_api_key = config['API_KEYS']['GOOGLE_GEMINI_API_KEY']
genai.configure(api_key=google_gemini_api_key)

model = genai.GenerativeModel('gemini-1.5-flash')

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/chat', methods=['GET'])
def chat():
    user_text = request.args.get('msg')
    if not user_text:
        return jsonify({'error': 'Message is required'}), 400

    try:
        response = model.generate_content(
            f"User: {user_text}\nBot:",
            max_tokens=100
        )
        return jsonify({'reply': response.text})
    except Exception as e:
        return jsonify({'error': 'Failed to fetch response'}), 500

if __name__ == '__main__':
    app.run(port=5000)
