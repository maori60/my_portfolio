document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("visit-counter");

    // Vérifier si l'élément existe (évite les erreurs sur d'autres pages)
    if (counterElement) {
        fetch("https://api.countapi.xyz/hit/maori60-portfolio/visites")
            .then(response => response.json())
            .then(data => {
                counterElement.innerText = `👁️ Nombre de visites : ${data.value}`;
            })
            .catch(error => {
                console.error("Erreur avec CountAPI :", error);
                counterElement.innerText = "🚨 Erreur de compteur";
            });
    }
});
