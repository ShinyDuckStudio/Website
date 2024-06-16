document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = [
        { name: "Thomas Soler", role: "Chef de Projet", 
         d1: "Fête très souvent son anniversaire (contre son gré)",
         d2 : "Sourd d'une oreille, s'occupe de la partie son",
         quote : "ShinyDuck Studio est une entreprise créée entre nous à parts égales",
         image : "canard_thomas"},
        { name: "Dodie Bonis", role: "Respo' Ennemis", 
         d1: "A déversé tout son sadisme dans les puzzles de NDOT",
         d2 : "Baisse la moyenne d'âge de l'entreprise à elle seule", 
         quote : "Les gars, vous vous souvenez qu'il y a ça à implémenter encore ?",
         image : "canard_dodie"},
        { name: "Amandine Dos Santos", role: "Respo' Comm'",
         d1: "A dû faire 40 mises à jour Ubuntu pour faire un merge",
         d2 : "S'est teint les cheveux en violet uniquement pour la dernière soutenance", 
         quote : "Les gars, j'ai fini le site",
         image : "canard_amandine"},
        { name: "Jules-Arthus Klein", role: "Respo' Technique",
         d1: "**S'endort pendant la réunion**",
         d2 : "A du faire un entretien d’embauche pour être sur ce site", 
         quote : "AutoPuller APP : \"Mon gars ya du neuf sur le serv ptetre c une erreur belek @JA\"",
         image : "canard_ja"},
        { name: "Lucie Romay", role: "Respo' Designs",
         d1: "N'a pas passé un seul jour sans menacer un membre de l'équipe",
         d2 : "Voit uniquement en pixel depuis le début de ce proj", 
         quote : "Bon ça y est il est fini le jeu ?",
         image : "canard_lucie"}
    ];

    const teamContainer = document.getElementById("team-members");

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
            <h2>${member.name}</h2>
            <p><strong>Rôle:</strong> ${member.role}</p>
            <p>${member.d1}</p>
            <p>${member.d2}</p>
            <p class = "it">"${member.quote}"</p>
            <img class="canard" src="img/${member.image}.png">
        `;
        teamContainer.appendChild(memberDiv);
    });
});
