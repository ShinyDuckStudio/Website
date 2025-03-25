document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = [
        { name: "Amandine Dos Santos", role: "Detection Manager",

         image: "canard_amandine"},
        { name: "Jules-Arthus Klein", role: "UI Manager",

         image: "canard_ja"},
        { name: "Lucie Romay", role: "Neural Network Manager",

         image: "canard_lucie"}
    ];
    
    const teamContainer = document.getElementById("team-members");

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
            <h2>${member.name}</h2>
            <p><strong>Role:</strong> ${member.role}</p>
            <img class="canard" src="img/${member.image}.png">
        `;
        teamContainer.appendChild(memberDiv);
    });
});
