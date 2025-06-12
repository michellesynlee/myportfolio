document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

window.onload = () => {
    const projects = [
        { title: "Portfolio Website", description: "A responsive personal portfolio built with HTML, CSS, and JS." },
        { title: "Todo App", description: "A simple todo app built with Flask and Python." },
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(div);
    });
};
