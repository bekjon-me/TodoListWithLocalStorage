export default function addTaskToProject() {
    let tasks = [];
    let dates = [];

    // if (localStorage.getItem('tasks')) {
    //     tasks = JSON.parse(localStorage.getItem('tasks'));
    // }
    // if (localStorage.getItem('dates')) {
    //     dates = JSON.parse(localStorage.getItem('dates'));
    // }

    if (document.getElementsByClassName('addedProject')) {
        let projects = [];
        for (let x = 0; x < document.getElementsByClassName('addedProject').length; x++) {
            projects.push(document.getElementsByClassName('addedProject')[x]);
        }
        projects.forEach(element => {
            element.addEventListener('click', () => {
                let addTaskBtn = document.getElementsByClassName('add-task-btn')[0].getElementsByTagName('button')[0];
                addTaskBtn.addEventListener('click', () => {
                    let addBtn = document.getElementsByClassName('AddTaskAddBtn')[0];
                    addBtn.addEventListener('click', () => {

                    })
                })
            })
        });
    }
}