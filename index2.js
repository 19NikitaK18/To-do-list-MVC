class View {
    constructor() {
        this.mainBlock = document.querySelector('#app');
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.taskList = document.createElement('ul');
    }

    initRender() {
        this.mainBlock.append(this.input, this.button, this.taskList);
        this.button.innerHTML = 'Add';
    }

    renderTask(el) {
        let task = document.createElement('li');
        this.taskList.appendChild(task);
        task.innerHTML = el;

        let delButton = document.createElement('button');
        task.appendChild(delButton);
        delButton.innerHTML = 'x';

        this.input.value = '';
    }
}

class Model {
    constructor(view) {
        this.view = view;
        this.tasks = [];
    }

    addTask(value) {
        this.tasks.push(value);
        console.log(this.tasks)
        this.view.renderTask(this.tasks[this.tasks.length-1])
    }
}

class Controller {
    constructor(view, model) {        
        this.view = view;
        this.model = model;
    }

    addData() {
        let inpValue = this.view.input.value;
        this.model.addTask(inpValue);
    }

    addHandle() {
        this.view.button.addEventListener('click', () => this.addData());
    }
}

const view = new View();
const model = new Model(view);
const controller = new Controller(view, model);
controller.addHandle();
view.initRender();