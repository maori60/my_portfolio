document.addEventListener("DOMContentLoaded", function () {
    // Récupérer le compteur de visites stocké localement
    let visitCount = localStorage.getItem("visitCount");

    // Si c'est la première visite, initialiser à 1
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    // Mettre à jour le stockage local
    localStorage.setItem("visitCount", visitCount);

    // Afficher le compteur sur la page
    document.getElementById("visit-counter").innerText = `👁️ Nombre de visites : ${visitCount}`;
});
