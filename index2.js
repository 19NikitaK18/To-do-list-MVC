class View {
    constructor() {
        this.input = document.createElement("input");
        this.addButton = document.createElement("button");
        this.mainBlock = document.querySelector("#app");
        this.taskList = document.createElement("ul");
    }
  
    initReneder() {
        this.mainBlock.append(this.input, this.addButton, this.taskList);
        this.addButton.innerHTML = "ADD";
    }
  
  
    renderTask(task) {
        const item = document.createElement("li");
        item.innerHTML = task;
        this.taskList.appendChild(item);
        const removeBtn = document.createElement('input');
        removeBtn.setAttribute('type', 'reset');
        removeBtn.setAttribute('value', "x");
        removeBtn.style.cursor = 'pointer';
        item.appendChild(removeBtn);
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
        console.log(this.tasks);
        this.view.renderTask(this.tasks[this.tasks.length - 1]);
    }

    removeTask(e) {
        // console.log(e.target.parentNode.innerText);
        // this.tasks.splice(e.target.parentNode.innerText);
        let mustRemThisTask = e.target.parentNode.innerText;
        console.log(mustRemThisTask);
        for (let index = 0; index < this.tasks.length; index++) {
            console.log(index);
            
        }

        


        // this.tasks.slice(e.target, 1);
        // console.log(this.tasks);
    }
  
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addData = this.addData.bind(this);
    }
    
    addData() {
        let value = this.view.input.value;
        if(value.length == 0) return;
        this.model.addTask(value);
        this.view.taskList.lastChild.lastChild.addEventListener("click", this.model.removeTask);
    }
    
    addHandle() {
        this.view.addButton.addEventListener("click", this.addData);
    }

    // removeHandle() {
    //     this.view.taskList.lastChild.lastChild.addEventListener("click", console.log('hello event'))
    // }
}


(function init() {
    const view = new View();
    const model = new Model(view);
    const controller = new Controller(model, view);
    view.initReneder();
    controller.addHandle();
    // controller.removeHandle()
})();
