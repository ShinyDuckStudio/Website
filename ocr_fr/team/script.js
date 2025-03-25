document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = [
        { name: "Amandine Dos Santos", role: "Respo' Détection des éléments",
         
         image : "canard_amandine"},
        { name: "Jules-Arthus Klein", role: "Respo' UI",
         image : "canard_ja"},
        { name: "Lucie Romay", role: "Respo' Réseau de neurones",
         image : "canard_lucie"}
    ];

    const teamContainer = document.getElementById("team-members");

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
            <h2>${member.name}</h2>
            <p><strong>Rôle:</strong> ${member.role}</p>
            <img class="canard" src="img/${member.image}.png">
        `;
        teamContainer.appendChild(memberDiv);
    });
});
