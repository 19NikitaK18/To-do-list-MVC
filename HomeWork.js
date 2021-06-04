/*Доработать приложение, написанное на уроке таким образом, чтоб возле каждой таски появлялся крестик, при нажатии на который удаляется таска и перерендеривает список уже без нее*/

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

    renderTask(smthCameInputValue) {
        let task = document.createElement('li');
        this.taskList.appendChild(task);
        task.innerHTML = smthCameInputValue;
        //button
        let delInput = document.createElement('input');
        delInput.setAttribute('type', 'button');
        delInput.setAttribute('value', 'X');

        task.appendChild(delInput);

        this.input.value = '';
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addData() {
        let value = this.view.input.value;
        if(value !== '') {
            this.model.addTask(value);
            this.view.renderTask(value);
        }else {
            console.log('nothing');
        }
    }

    addHandle() {
        this.view.button.addEventListener('click', () => this.addData());
    }
}

class Model {
    constructor() {
        this.tasks = [];
    }

    addTask(value) {
        this.tasks.push(value);
        console.log(this.tasks);
    }
}

const view = new View();
const model = new Model();
const controller = new Controller(model, view);
view.initRender();
controller.addHandle();
