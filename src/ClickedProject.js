let addTaskBtn = document.getElementsByClassName('addTask')[0];

export default function Clicked_project() {
    addTaskBtn.style.display = 'flex';
    if (document.getElementsByClassName('AddTask')[0]) {
        document.getElementsByClassName('AddTask')[0].style.display = 'none';
    }
    addTaskBtn.addEventListener('click', () => {
        if (!document.getElementsByClassName('AddTaskInput')[0]) {
            AddTask.createTaskDOM();
        }
        console.log('projects');
        addTaskBtn.style.display = 'none';
        document.getElementsByClassName('AddTask')[0].style.display = 'block';
        document.getElementsByClassName('add-task-btn')[0].style.display = 'flex';
    });
}