function addTask() {
    // Get form values
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var color = document.getElementById('color').value;
    var startDate = document.getElementById('startDate').value;
    var status = document.getElementById('status').value;
    var budget = document.getElementById('budget').value;

    // Create a task object
    var task = {
        title: title,
        description: description,
        color: color,
        startDate: startDate,
        status: status,
        budget: budget,
        isImportant: document.querySelector('.important-icon').classList.contains('fas')
    };


    // Create a new task element
    var taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
    <div>
                <h4>${task.title}</h4>
                <p>Description: ${task.description}</p>
                <p>Color: ${task.color}</p>
                <p>Start Date: ${task.startDate}</p>
                <p>Status: ${task.status}</p>
                <p>Budget: ${task.budget}</p>
            </div>
            <i class="fas fa-star important-icon ${task.isImportant ? 'fas' : 'far'}" onclick="toggleImportance(this)"></i>
        `;

    // Append the task element to the task list
    document.getElementById('taskList').appendChild(taskElement);

    // Clear the form
    document.getElementById('taskForm').reset();
}

function toggleImportance(icon) {
    icon.classList.toggle('far'); // Toggle between filled and outline star icons
    icon.classList.toggle('fas');
    icon.classList.toggle('important-icon');
}

function toggleForm() {
    var form = document.getElementById('taskForm');
    form.style.display = (form.style.display === 'none') ? 'block' : 'none';
}

// Display the task details in Section A
var taskDisplay = document.getElementById('taskDisplay');
taskDisplay.innerHTML = `
    <div class="task">
        <h4>${task.title}</h4>
        <p>Description: ${task.description}</p>
        <p>Color: ${task.color}</p>
        <p>Start Date: ${task.startDate}</p>
        <p>Status: ${task.status}</p>
        <p>Budget: ${task.budget}</p>
        <i class="fas fa-star important-icon ${task.isImportant ? 'fas' : 'far'}" onclick="toggleImportance(this)"></i>
    </div>
`;