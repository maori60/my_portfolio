document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const messagesContainer = document.getElementById("messages");

    const API_KEY = "sk-c625a0adb48b4341b036868c7b226f8d";  // Remplacez par votre clé API DeepSeek
    const API_URL = "https://api.deepseek.com/v1/chat/completions";

    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        // Afficher le message de l'utilisateur
        displayMessage("👤 " + userMessage, "user");

        // Envoyer la requête à DeepSeek
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        { role: "user", content: userMessage }
                    ],
                    stream: false
                })
            });

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                const botMessage = data.choices[0].message.content;
                displayMessage("🤖 " + botMessage, "bot");
            } else {
                displayMessage("🤖 Erreur : aucune réponse reçue.", "bot");
            }
        } catch (error) {
            console.error("Erreur avec DeepSeek API :", error);
            displayMessage("🤖 Erreur de connexion à l'API.", "bot");
        }

        // Réinitialiser le champ de texte
        userInput.value = "";
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement("p");
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
