document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("visit-counter");

    if (counterElement) {
        fetch("https://api.countapi.xyz/hit/maori60-portfolio/visites", { timeout: 5000 }) // Timeout de 5 sec
            .then(response => {
                if (!response.ok) throw new Error("Réponse non valide");
                return response.json();
            })
            .then(data => {
                counterElement.innerText = `👁️ Nombre de visites : ${data.value}`;
            })
            .catch(error => {
                console.error("Erreur avec CountAPI :", error);
                counterElement.innerText = "⚠️ Compteur indisponible";
            });
    }
});
