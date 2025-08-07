let students = [];
let idCounter = 1;

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    const student = {
        id: idCounter++,
        name,
        email,
        course
    };

    students.push(student);
    displayStudents();
    this.reset();
});

function displayStudents() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
        `;

        tbody.appendChild(row);
    });
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    displayStudents();
}
