document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = [
        { name: "Thomas Soler", role: "Project Manager", 
         d1: "Often celebrates his birthday (against his will)",
         d2: "Deaf in one ear, responsible for the sound part",
         quote: "ShinyDuck Studio est une entreprise créée entre nous à parts égales",
         image: "canard_thomas"},
        { name: "Dodie Bonis", role: "Puzzles Manager", 
         d1: "Poured all her sadism into the NDOT puzzles",
         d2: "Lowers the average age of the company all by herself", 
         quote: "Les gars, vous vous souvenez qu'il y a ça à implémenter encore ?",
         image: "canard_dodie"},
        { name: "Amandine Dos Santos", role: "Communication Manager",
         d1: "Took 40 Ubuntu updates to perform a merge",
         d2: "Dyed their hair purple just for the final presentation", 
         quote: "Les gars, j'ai fini le site",
         image: "canard_amandine"},
        { name: "Jules-Arthus Klein", role: "Technical Manager",
         d1: "*Falls asleep during meetings*",
         d2: "Had to go through a job interview to be on this website", 
         quote: "AutoPuller APP : \"Mon gars ya du neuf sur le serv ptetre c une erreur belek @JA\"",
         image: "canard_ja"},
        { name: "Lucie Romay", role: "Designs Manager",
         d1: "Hasn't gone a single day without threatening a team member",
         d2: "Has only seen in pixels since the beginning of this project", 
         quote: "Bon ça y est il est fini le jeu ?",
         image: "canard_lucie"}
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
            <img class="canard" src="img/${member.image}.png">
        `;
        teamContainer.appendChild(memberDiv);
    });
});
