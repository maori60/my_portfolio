document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");

    chatButton.addEventListener("click", async function () {
        let userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        chatBox.innerHTML += `<p>👤 ${userMessage}</p>`;
        chatInput.value = "";

        try {
            let response = await fetch("http://127.0.0.1:5000/chat", {  // 🔥 Appel au serveur Flask
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage })
            });

            let data = await response.json();
            chatBox.innerHTML += `<p>🤖 ${data.response}</p>`;
        } catch (error) {
            chatBox.innerHTML += `<p>❌ Erreur de connexion</p>`;
            console.error(error);
        }
    });
});
