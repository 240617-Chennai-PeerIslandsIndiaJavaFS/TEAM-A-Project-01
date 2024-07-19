document.addEventListener('DOMContentLoaded', function() {
    // Retrieve tasks data for the team member (mocked for demonstration)
    const tasks = [
        { id: 1, title: 'Task A', description: 'Description of Task A', status: 'In Progress', projectId: 1 },
        { id: 2, title: 'Task B', description: 'Description of Task B', status: 'Pending', projectId: 1 },
        { id: 3, title: 'Task C', description: 'Description of Task C', status: 'Completed', projectId: 2 }
    ];

    // Display tasks assigned to the team member
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.title} - ${task.description} (${task.status})`;
        taskList.appendChild(li);
    });
});
