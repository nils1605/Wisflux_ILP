let toDo = [];
let completed = [];

function generateId() {
    return toDo.length > 0 ? Math.max(...toDo.map(task => task.id)) + 1 : 1;
}

function add(title) {
    if (!title.trim()) return -1; 
    const newTask = {
        id: generateId(),
        task: title
    };

    toDo.push(newTask);
    return newTask.id;
}
function remove(id) {
    const index = toDo.findIndex(task => task.id === id);
    if (index !== -1) {
        toDo.splice(index, 1);
        return true;
    }
    return false;
}

function update(id, title) {
    if (!title.trim()) return false;

    const task = toDo.find(task => task.id === id);
    if (task) {
        task.task = title;
        return true;
    }
    return false;
}

function markAsCompleted(id) {
    const index = toDo.findIndex(task => task.id === id);
    if (index !== -1) {
        const [task] = toDo.splice(index, 1); 
        completed.push(task);
        return true;
    }
    return false;
}
console.log(add("Learn JavaScript"));  
console.log(add("Build a ToDo App"));  
console.log(toDo);  

console.log(update(1, "Master JavaScript")); 
console.log(remove(2));  

console.log(markAsCompleted(1));
console.log(toDo);       
console.log(completed);  
