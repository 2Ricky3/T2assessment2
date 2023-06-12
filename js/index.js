
function registerStudent() {
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let studentNumber = document.getElementById('number').value;
    let subjectChoiceOne = document.getElementById('subOne').value;
    let subjectChoiceTwo = document.getElementById('subTwo').value;
    let year = document.querySelector('input[name="baseRadio"]:checked').value;
  
    let studentData = {
      firstName: firstName,
      lastName: lastName,
      studentNumber: studentNumber,
      subjectChoiceOne: subjectChoiceOne,
      subjectChoiceTwo: subjectChoiceTwo,
      year: year
    };
  
    let jsonData = JSON.stringify(studentData);
  
    console.log(jsonData);
    displayStudentData(studentData);
  }
  function displayStudentData(studentData) {
    let studentOut = document.getElementById('studentOut');
  
    let card = document.createElement('div');
    card.className = 'col-4';
    card.innerHTML = `
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">${studentData.firstName} ${studentData.lastName}</h5>
          <p>Student Number: ${studentData.studentNumber}</p>
          <p>Year: ${studentData.year}</p>
          <p>Choice One: ${studentData.subjectChoiceOne}</p>
          <p>Choice Two: ${studentData.subjectChoiceTwo}</p>
        </div>
      </div>
    `;
  
    studentOut.appendChild(card);
  }