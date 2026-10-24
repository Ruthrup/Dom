
const myName = "Ruthrup";

document.title = myName + " | My Portfolio";
document.querySelector("h1").textContent = myName;

const profile = document.getElementById("profile");
profile.src = "profile.jpg";
profile.alt = myName + "'s profile photo";

document.querySelector("nav a").classList.add("active");

const skills = ["HTML", "CSS", "JavaScript"];
const skillList = document.getElementById("skill-list");

skills.forEach(function (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
});

document.getElementById("footer").textContent =
    "Last updated: " + new Date().toLocaleDateString();
