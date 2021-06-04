// class View {
//     constructor() {
//         this.mainBlock = document.querySelector('#app');
//         this.input = document.createElement('input');
//         this.button = document.createElement('button');
//         this.taskList = document.createElement('ul');
//     }

//     initRender() {
//         this.mainBlock.append(this.input, this.button, this.taskList);
//         this.button.innerHTML = 'Add';
//     }

//     renderTask(smthCameInputValue) {
//         let task = document.createElement('li');
//         this.taskList.appendChild(task);
//         task.innerHTML = smthCameInputValue;
//         //button
//         let delInput = document.createElement('input');
//         delInput.setAttribute('type', 'button');
//         delInput.setAttribute('value', 'X');
//         delInput.innerHTML = 'X';
//         //button styles

//         delInput.style.borderRadius =  '50%';
//         delInput.style.border =  '1px solid black';
//         delInput.style.backgroundColor =  'red';
//         delInput.style.marginLeft =  '10px';
//         delInput.style.fontSize =  '10px';
//         delInput.style.fontWeight =  'bold';
//         delInput.style.height =  '20px';
//         delInput.style.width =  '20px';

//         task.appendChild(delInput);

//         this.input.value = '';

        
//         delInput.addEventListener('click', () => console.log('hello'));
        
        
//     }

// }

// class Controller {
//     constructor(model, view) {
//         this.model = model;
//         this.view = view;
//     }

//     addData() {
//         let value = this.view.input.value;
//         if(value !== '') {
//             this.model.addTask(value);
//             this.view.renderTask(value);
//         }else {
//             console.log('nothing');
//         }
        
//         //
//     }

//     addHandle() {
//         this.view.button.addEventListener('click', () => this.addData());
//     }

    
    

// }



// class Model {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(value) {
//         this.tasks.push(value);
//         console.log(this.tasks);
//     }
// }

// const view = new View();
// const model = new Model();
// const controller = new Controller(model, view);
// view.initRender();
// controller.addHandle();

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
        delButton.setAttribute('class', 'del');
        // let getDelBut = document.querySelector('#del');
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
        // this.tasks.forEach(elem => {
        //     console.log(elem);
        //     this.view.renderTask(elem)
        // })
        this.view.renderTask(this.tasks[this.tasks.length-1])
    }
    
    // delTask() {

    // }   
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

class ControllerCheckedDelButton {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    // delHandle() {
    //     this.view.getDelBut.addEventListener('click', delTask(e.target))
    // }
    delData(e) {
        
        console.log(e.target.parentNode());

    }
    
    delHandle() {
        // let checkDelBut = document.querySelector('button');
        this.view.taskList.addEventListener('click', this.delData);
        
    }
    
}

const view = new View();
const model = new Model(view);
const controller = new Controller(view, model);
controller.addHandle();
view.initRender();

const controllerCheckedDelButton = new ControllerCheckedDelButton(view, model);
controllerCheckedDelButton.delHandle();