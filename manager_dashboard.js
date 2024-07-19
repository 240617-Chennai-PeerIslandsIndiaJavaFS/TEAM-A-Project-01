document.addEventListener('DOMContentLoaded', function() {
    // Retrieve projects data (mocked for demonstration)
    const projects = [
        { id: 1, name: 'Project A', description: 'Description of Project A', status: 'In Progress' },
        { id: 2, name: 'Project B', description: 'Description of Project B', status: 'Completed' }
    ];

    const projectList = document.getElementById('projectList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name} - ${project.description} (${project.status})`;
        projectList.appendChild(li);
    });
});
