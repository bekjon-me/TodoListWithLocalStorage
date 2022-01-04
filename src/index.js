// import TaskDate from "./TaskDate";

import "./style.css";
import hamburger from "./hamburger.js";
import TaskDOM from "./TaskDOM.js";
import WhichBox from "./clickedBox.js";
import Clicked_project from "./ClickedProject";
import addedTask from './addedTask';
import addTaskToProject from './taskToProject';
import setDates from './dates';
import isToday from "date-fns/isToday";
import { isThisWeek, parseISO } from "date-fns";




// let AddBtnTask = new AddCancel("addBtn");
// let cancelBtnTask = new AddCancel("CancelBtn");
let task = new TaskDOM('TaskDOMDiv', document.getElementsByClassName('main-adder')[0], document.getElementsByClassName('add-project')[0]);
let AddTask = new TaskDOM('AddTask', document.getElementsByClassName('add-task-btn')[0], document.getElementsByClassName('add-task-btn')[0])
let added_task = new addedTask();
let added_taskIndex = new addedTask('index');
let addedTaskCancel = new addedTask('cancel');
hamburger();

// document.getElementById('add-project').addEventListener('click', () => {
//     task.createTaskDOM();

//     document.getElementById('addBtn').addEventListener('click', () => {
//         console.log('salom')
//         AddBtnTask.addProject();
//         if (document.getElementsByClassName('TaskDOMDivInput')[0].value = '') {}
//         task.removeTaskDOM();
//     });
//     document.getElementsByClassName('TaskDOMDivCancelBtn')[0].addEventListener('click', () => {
//         cancelBtnTask.addProject();
//         task.removeTaskDOM();
//     })
// });



let addTaskBtn = document.getElementsByClassName('addTask')[0];


// const addedMainAddBtn = document.createElement('button');
// addedMainAddBtn.innerHTML = '<i class="fas fa-plus"></i>Add Tasks';
document.getElementsByClassName('inbox-btn')[0].addEventListener('click', () => {
    addTaskBtn.style.display = 'flex';
    if (document.getElementsByClassName('AddTask')[0]) {
        document.getElementsByClassName('AddTask')[0].style.display = 'none';
    }
    addTaskBtn.addEventListener('click', () => {
        if (!document.getElementsByClassName('AddTaskInput')[0]) {
            AddTask.createTaskDOM();
        }
        document.getElementsByClassName('AddTaskAddBtn')[0].addEventListener('click', () => {
            if (document.getElementsByClassName('AddTaskInput')[0].value === '') {} else {
                added_task.addedTasks();
            }
        })

    })
})

addTaskBtn.addEventListener('click', () => {
    if (!document.getElementsByClassName('AddTaskInput')[0]) {
        AddTask.createTaskDOM();
    }
    document.getElementsByClassName('AddTaskAddBtn')[0].addEventListener('click', () => {
        if (document.getElementsByClassName('AddTaskInput')[0].value === '') {} else {
            added_task.addedTasks();
            setDates();
        }
    })
    document.getElementsByClassName('AddTaskCancelBtn')[0].addEventListener('click', () => {
        addedTaskCancel.addedTasks();
    })
})
added_taskIndex.addedTasks();


addTaskBtn.addEventListener('click', () => {
    if (!document.getElementsByClassName('AddTaskInput')[0]) {
        AddTask.createTaskDOM();
    }
    addTaskBtn.style.display = 'none';
    document.getElementsByClassName('AddTask')[0].style.display = 'block';
    document.getElementsByClassName('add-task-btn')[0].style.display = 'flex';
})

const inboxBtn = document.getElementsByClassName('inbox-btn')[0];
const todayBtn = document.getElementsByClassName('today-btn')[0];
const thisWeekBtn = document.getElementsByClassName('this-week-btn')[0];



let addedTasksBtns = [];
let taskdates = [];
if (localStorage.getItem('tasks')) {
    addedTasksBtns = document.getElementsByClassName('addedTask');
}
inboxBtn.addEventListener('click', () => {
    let InboxBtnClicked = new WhichBox('Inbox');
    InboxBtnClicked.clickBox();
    for (let k = 0; k < addedTasksBtns.length; k++) {
        addedTasksBtns[k].style.display = 'flex';
    }
});
todayBtn.addEventListener('click', () => {
    let todayBtnClicked = new WhichBox('Today');
    todayBtnClicked.clickBox();
    addTaskBtn.style.display = 'none';
    if (document.getElementsByClassName('AddTask')[0]) {
        document.getElementsByClassName('AddTask')[0].style.display = 'none';
    }
    if (localStorage.getItem('dates')) {
        taskdates = JSON.parse(localStorage.getItem('dates'))
    }
    for (let k = 0; k < addedTasksBtns.length; k++) {
        addedTasksBtns[k].style.display = 'none';
    }
    for (let z = 0; z < taskdates.length; z++) {
        if (isToday(parseISO(taskdates[z])) === true) {
            addedTasksBtns[z].style.display = 'flex';
        }
    }
});
thisWeekBtn.addEventListener('click', () => {
    let thisWeekBtnClicked = new WhichBox('This Week');
    thisWeekBtnClicked.clickBox();
    addTaskBtn.style.display = 'none';
    if (document.getElementsByClassName('AddTask')[0]) {
        document.getElementsByClassName('AddTask')[0].style.display = 'none';
    }
    if (localStorage.getItem('dates')) {
        taskdates = JSON.parse(localStorage.getItem('dates'))
    }
    for (let k = 0; k < addedTasksBtns.length; k++) {
        addedTasksBtns[k].style.display = 'none';
    }
    for (let z = 0; z < taskdates.length; z++) {
        if (isThisWeek(parseISO(taskdates[z])) === true) {
            addedTasksBtns[z].style.display = 'flex';
        }
        // document.getElementsByClassName('date')[z].addEventListener('click', () => {
        //     document.getElementsByClassName('dateInput')[0].addEventListener('change', () => {
        //         if (isThisWeek(parseISO(taskdates[z])) === true) {
        //             addedTasksBtns[z].style.display = 'flex';
        //             console.log('dasdaad')
        //         } else {
        //             addedTasksBtns[z].style.display = 'none';
        //         }
        //     })
        // })
    }
});





// ACTIVE BUTTONS 

let buttons = document.getElementsByTagName("button");
let buttonsArray = Object.entries(buttons);
buttonsArray.forEach(item => {
    item[1].addEventListener('click', () => {
        for (let i = 0; i < buttonsArray.length; i++) {
            if (buttonsArray[i][1].classList[1] === "greyBG") {
                buttonsArray[i][1].classList.remove("greyBG");
            }
            item[1].classList.add("greyBG");
        }
    })
});



export default function getProject() {
    if (localStorage.getItem("projects")) {
        let names = JSON.parse(localStorage.getItem("projects"));
        names.forEach(element => {
            let addedProject = document.createElement('button');
            addedProject.classList.add('addedProject');
            addedProject.innerHTML = `<i class="fas fa-tasks"></i>${element}<i class="fas fa-minus-circle"></i>`;
            document.getElementsByClassName('projects')[0].appendChild(addedProject);
            addedProject.addEventListener('click', () => {
                Clicked_project();
                addTaskBtn.style.display = 'flex';
                if (document.getElementsByClassName('AddTask')[0]) {
                    document.getElementsByClassName('AddTask')[0].style.display = 'none';
                }
                addTaskBtn.addEventListener('click', () => {
                    if (!document.getElementsByClassName('AddTaskInput')[0]) {
                        AddTask.createTaskDOM();
                    }
                    document.getElementsByClassName('AddTaskAddBtn')[0].addEventListener('click', () => {
                        if (document.getElementsByClassName('AddTaskInput')[0].value === '') {} else {
                            added_task.addedTasks();
                        }
                    })

                })
            })
        });
    }
}
getProject();

const minus = document.getElementsByClassName('fa-minus-circle');
document.addEventListener("DOMContentLoaded", () => {
    for (let k = 0; k < minus.length; k++) {
        minus[k].addEventListener('click', () => {
            minus[k].parentElement.style.display = "none";
            document.getElementsByClassName('main-added-h1')[0].innerHTML = "Inbox";
            let newLocalStorage = JSON.parse(localStorage.getItem('projects'));
            let itemIndex = newLocalStorage.indexOf(minus[k].parentElement.textContent);
            if (itemIndex > -1) {
                newLocalStorage.splice(itemIndex, 1);
            }
            localStorage.setItem('projects', JSON.stringify(newLocalStorage));
            console.log(newLocalStorage)
        })
    }
})


let projectsBtns = [];
for (let i = 0; i < document.getElementsByClassName('addedProject').length; i++) {
    projectsBtns.push(document.getElementsByClassName('addedProject')[i])
}
projectsBtns.forEach(element => {
    element.addEventListener('click', () => {
        document.getElementsByClassName('main-added-h1')[0].innerHTML = element.textContent;
    })
})

addTaskToProject();
setDates();