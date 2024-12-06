const formContainer = document.getElementById('form-container');
const studentList = document.getElementById('student-list');

function addStudent() {
  const name = document.getElementById('name').value;
  const rollNumber = document.getElementById('roll-number').value;
  const department = document.getElementById('department').value;

  const studentInfo = `
    <div class="student">
      <p>Name: ${name}</p>
      <p>Roll Number: ${rollNumber}</p>
      <p>Department: ${department}</p>
    </div>
  `;

  studentList.innerHTML += studentInfo;

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('roll-number').value = '';
  document.getElementById('department').value = '';
}