const apiUrl = "http://localhost:8080/api/students";


async function loadStudents() {
    const res = await fetch(apiUrl);
    const students = await res.json();

    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    students.forEach(s => {
        const row = `<tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.course}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

document.getElementById("studentForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    // Reset form
    this.reset();
    loadStudents();
});

window.onload = loadStudents;
