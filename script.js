function popup() {
    document.getElementById("task").classList.toggle("hidden");
}

class task {
    constructor(description, taskTime){
        this.description = description;
        this.taskTime = taskTime;
        this.isDone = false;
    }
};

const taskArray = [];

function AddTask(){
    const input_desc = document.getElementById("opis").value;
    const input_time = document.getElementById("godzina").value;
    const new_Task = new task(input_desc, input_time);
    taskArray.push(new_Task);

    const ul = document.getElementById("listaZadan");
    ul.innerHTML = "";

    for (t of taskArray) {
        const li = document.createElement("li");
         li.textContent = `${t.taskTime} - ${t.description} - Status: ${t.isDone}`;
        ul.appendChild(li);
    };
    
}

function RemoveTask(){
    for(t of taskArray) {
        delete t;
    }
}