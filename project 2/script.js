
const students = [
    { name: "Ella", course: "Frontend", score: 90 },
    { name: "Ish", course: "Backend", score: 45 },
    { name: "Ruth", course: "Frontend", score: 85 },
    { name: "Anitha", course: "Backend", score: 70 },
    { name: "Uwase", course: "Frontend", score: 40 },
    { name: "Mugisha", course: "Backend", score: 95 }
];

const sortedStudents = [...students].sort(function (a, b) {
    return a.course === "Frontend" ? -1 :
        b.course === "Frontend" ? 1 : 0;
});

const container = document.getElementById("students");

sortedStudents.forEach(function (student) {
    const card = document.createElement("div");
    card.classList.add("card");

    if (student.score >= 80) {
        card.classList.add("high");
    }

    if (student.score < 50) {
        card.classList.add("red");
    }

    card.innerHTML = `
    <h3>${student.name}</h3>
    <p>Course: ${student.course}</p>
    <p>Score: ${student.score}</p>
  `;

    container.appendChild(card);
});

const total = students.reduce(function (sum, student) {
    return sum + student.score;
}, 0);

const average = total / students.length;

const topScore = Math.max(...students.map(s => s.score));

const topStudents = students.filter(function (student) {
    return student.score === topScore;
});

document.getElementById("summary").innerHTML = `
  <p>Total students: ${students.length}</p>
  <p>Average score: ${average.toFixed(2)}</p>
  <p>Top student(s): ${topStudents.map(s => s.name).join(", ")}</p>
`;
