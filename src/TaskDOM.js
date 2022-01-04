export default class TaskDOM {
    constructor(TaskDOMClass, whereAdded, removeButton) {
        this.TaskDOMClass = TaskDOMClass;
        this.whereAdded = whereAdded;
        this.removeButton = removeButton;
    }

    createTaskDOM() {
        if (!document.getElementById('addBtn')) {
            const TaskDOMDiv = document.createElement('div');
            TaskDOMDiv.classList.add(this.TaskDOMClass);
            const addInput = document.createElement('input');
            addInput.classList.add(`${this.TaskDOMClass}Input`);
            TaskDOMDiv.appendChild(addInput);
            const addButton = document.createElement('button');
            addButton.setAttribute('id', 'addBtn');
            addButton.classList.add(`${this.TaskDOMClass}AddBtn`);
            addButton.innerHTML = "Add";
            TaskDOMDiv.appendChild(addButton);
            const cancelButton = document.createElement('button');
            cancelButton.classList.add(`${this.TaskDOMClass}CancelBtn`)
            cancelButton.innerHTML = "Cancel";
            TaskDOMDiv.appendChild(cancelButton);
            this.removeButton.style.display = "none"
            this.whereAdded.appendChild(TaskDOMDiv);
        } else {
            document.getElementsByClassName('TaskDOMDiv')[0].style.display = 'block';
            document.getElementsByClassName('add-project')[0].style.display = 'none';
            document.getElementsByClassName('TaskDOMDivInput')[0].value = '';
        }

    }

    removeTaskDOM() {
        document.getElementsByClassName(this.TaskDOMClass)[0].style.display = "none";
        this.removeButton.style.display = "flex";
    }
}