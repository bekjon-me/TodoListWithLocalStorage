import setDates from './dates';
export default class addedTask {
    constructor(whereReading) {
        this.whereReading = whereReading;
    }
    addedTasks() {
        let tasks = [];
        let dates = [];

        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        if (localStorage.getItem('dates')) {
            dates = JSON.parse(localStorage.getItem('dates'));
        }
        if (this.whereReading === 'index') {
            if (localStorage.getItem('tasks')) {
                for (let z = 0; z < tasks.length; z++) {
                    let task = document.createElement('button');
                    task.classList.add('addedTask');
                    if (localStorage.getItem('tasks')) {
                        task.innerHTML = `<i class='fas fa-check'></i><h1>${tasks[z]}</h1> <button class='date'>${dates[z]}</button> <i class='fas fa-times-circle'></i>`;
                    }
                    document.getElementsByClassName('tasks')[0].appendChild(task);
                }
            }
        } else if (this.whereReading === 'cancel') {
            document.getElementsByClassName('AddTask')[0].style.display = 'none';
            document.getElementsByClassName('addTask')[0].style.display = 'flex';
            document.getElementsByClassName('AddTaskInput')[0].value === '';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('dates', JSON.stringify(dates));
        } else {
            if (tasks.length === 0) {
                var task = document.createElement('button');
                task.classList.add('addedTask');
                tasks.push(document.getElementsByClassName('AddTaskInput')[0].value);
                document.getElementsByClassName('AddTaskInput')[0].value = '';

                localStorage.setItem('tasks', JSON.stringify(tasks));

                task.innerHTML = `<i class='fas fa-check'></i><h1>${tasks[tasks.length - 1]}</h1> <button class='date'>No date</button> <i class='fas fa-times-circle'></i>`;
                document.getElementsByClassName('tasks')[0].appendChild(task);
                document.getElementsByClassName('AddTask')[0].style.display = 'none';
                document.getElementsByClassName('addTask')[0].style.display = 'flex';
                document.getElementsByClassName('AddTaskInput')[0].value = '';
                dates.push('No date');
                localStorage.setItem('dates', JSON.stringify(dates));
            } else {
                tasks.push(document.getElementsByClassName('AddTaskInput')[0].value);
                task = document.createElement('button');
                task.classList.add('addedTask');

                localStorage.setItem('tasks', JSON.stringify(tasks));

                task.innerHTML = `<i class='fas fa-check'></i><h1>${tasks[tasks.length-1]}</h1> <button class='date'>No date</button> <i class='fas fa-times-circle'></i>`;
                document.getElementsByClassName('tasks')[0].appendChild(task);
                document.getElementsByClassName('AddTask')[0].style.display = 'none';
                document.getElementsByClassName('addTask')[0].style.display = 'flex';
                document.getElementsByClassName('AddTaskInput')[0].value = '';
                dates.push('No date');
                localStorage.setItem('dates', JSON.stringify(dates));
            }
        }
        // if (document.getElementsByClassName('date')) {
        //     setDates();
        // }
        let Btns = [];
        for (let k = 0; k < tasks.length; k++) {
            for (let z = 0; z < 2; z++) {
                Btns.push(document.getElementsByClassName('addedTask')[k].getElementsByClassName('fas')[z]);
            }
        }
        Btns.forEach(element => {
            element.addEventListener('click', () => {
                for (let b = 0; b < tasks.length; b++) {
                    if (document.getElementsByClassName('addedTask')[b] === element.parentElement) {
                        tasks.splice(b, 1);
                        dates.splice(b, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        localStorage.setItem('dates', JSON.stringify(dates));
                        document.getElementsByClassName('tasks')[0].removeChild(element.parentElement);
                        Btns.splice(b * 2, 1);
                        Btns.splice(b * 2 + 1, 1);
                    }
                }
            })
        })
    }
}