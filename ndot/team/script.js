document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = [
        { name: "Thomas Soler", role: "Chef de Projet", 
         d1: "fête très souvent son anniversaire (contre son gré)",
         d2 : "sourd d'une oreille, s'occupe de la partie son",
         quote : "ShinyDuck Studio est une entreprise créée entre nous à parts égales"},
        { name: "Dodie Bonis", role: "pôle ?", 
         d1: "",
         d2 : "", 
         quote : ""},
        { name: "Amandine Dos Santos", role: "pôle comm'",
         d1: "",
         d2 : "", 
         quote : ""},
        { name: "Jules-Arthus Klein", role: "pôle ?",
         d1: "",
         d2 : "", 
         quote : ""},
        { name: "Lucie Romay", role: "pôle design",
         d1: "",
         d2 : "", 
         quote : ""}
    ];

    const teamContainer = document.getElementById("team-members");

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
            <h2>${member.name}</h2>
            <p><strong>Role:</strong> ${member.role}</p>
            <p>${member.d1}</p>
            <p>${member.d2}</p>
            <p class = "it">"${member.quote}"</p>
        `;
        teamContainer.appendChild(memberDiv);
    });
});
