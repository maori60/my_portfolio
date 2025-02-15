from flask import Flask, request, jsonify
from flask_cors import CORS
import requests  # Pour faire l'appel à l'API Mistral

app = Flask(__name__)
CORS(app)  # Autoriser les requêtes depuis ton frontend

MISTRAL_API_KEY = "8kaXawFaLMsPFbx0H1f3kpBIlmOxE3NA"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Message vide"}), 400

    try:
        # Appel à l'API Mistral depuis le serveur (plus sécurisé)
        response = requests.post(
            "https://api.mistral.ai/v1/chat/completions",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {MISTRAL_API_KEY}"
            },
            json={
                "model": "mistral-small-latest",
                "messages": [
                    {"role": "system", "content": "Tu es un assistant utile."},
                    {"role": "user", "content": user_message}
                ],
                "max_tokens": 256
            }
        )

        mistral_response = response.json()
        bot_message = mistral_response["choices"][0]["message"]["content"]

        return jsonify({"response": bot_message})

    except Exception as e:
        print("Erreur API Mistral :", e)
        return jsonify({"error": "Erreur de connexion avec Mistral"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
