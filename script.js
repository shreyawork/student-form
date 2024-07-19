document.addEventListener("DOMContentLoaded", function() {
    // Select form and input elements
    const studentForm = document.querySelector("#student-form");
    const studentNameInput = document.querySelector("#student-name");
    const studentIdInput = document.querySelector("#student-id");
    const emailIdInput = document.querySelector("#email-id");
    const contactNoInput = document.querySelector("#contact-no");
    // Select the table body where student records will be displayed
    const studentsTable = document.querySelector("#students-table tbody");

    // Add event listener to the form for the 'submit' event
    studentForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get trimmed values from input fields
        const studentName = studentNameInput.value.trim();
        const studentId = studentIdInput.value.trim();
        const emailId = emailIdInput.value.trim();
        const contactNo = contactNoInput.value.trim();

        // Check if all input fields have values
        if (studentName && studentId && emailId && contactNo) {
            // Create a new table row for the student
            const studentRow = document.createElement("tr");

            // Create a cell for the student name and append to the row
            const nameCell = document.createElement("td");
            nameCell.textContent = studentName;
            studentRow.appendChild(nameCell);

            // Create a cell for the student ID and append to the row
            const idCell = document.createElement("td");
            idCell.textContent = studentId;
            studentRow.appendChild(idCell);

            // Create a cell for the email ID and append to the row
            const emailCell = document.createElement("td");
            emailCell.textContent = emailId;
            studentRow.appendChild(emailCell);

            // Create a cell for the contact number and append to the row
            const contactCell = document.createElement("td");
            contactCell.textContent = contactNo;
            studentRow.appendChild(contactCell);

            // Create a cell for action buttons (edit and delete)
            const actionsCell = document.createElement("td");

            // Create an edit button, add class, and append to the actions cell
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-button");
            actionsCell.appendChild(editButton);

            // Create a delete button, add class, and append to the actions cell
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            actionsCell.appendChild(deleteButton);

            // Append the actions cell to the student row
            studentRow.appendChild(actionsCell);
            // Append the student row to the table body
            studentsTable.appendChild(studentRow);

            // Clear the input fields after adding the student
            studentNameInput.value = "";
            studentIdInput.value = "";
            emailIdInput.value = "";
            contactNoInput.value = "";

            // Add event listener to the delete button to remove the student row
            deleteButton.addEventListener("click", function() {
                studentsTable.removeChild(studentRow);
            });

            // Add event listener to the edit button to allow editing the student record
            editButton.addEventListener("click", function() {
                // Populate the form with the current student data
                studentNameInput.value = studentName;
                studentIdInput.value = studentId;
                emailIdInput.value = emailId;
                contactNoInput.value = contactNo;

                //changing the button text and set the class
                document.querySelector("button").innerHTML = "Update";
                document.querySelector("button").classList.add("edit-button");
                
                // Remove the current student row to update the record upon form submission
                studentsTable.removeChild(studentRow);
            });

            //reset the class styles and Text
            document.querySelector("button").classList.remove("edit-button");
            document.querySelector("button").innerHTML = "Register";
            document.querySelector("button").classList.add("submit-button");       
        }
    });
});
