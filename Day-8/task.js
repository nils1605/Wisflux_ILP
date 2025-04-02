var todos = [];
function add(name, description) {
    return todos.push({
        name: name,
        description: description,
        done: false
    });
}
function remove(index) {
    return todos.splice(index, 1);
}
function list() {
    todos.forEach(function (todo, index) {
        console.log("".concat(index, " - ").concat(todo.name));
    });
}
function update(index, name, description) {
    if (index >= 0 && index < todos.length) {
        todos[index].name = name;
        todos[index].description = description;
        return todos[index];
    }
    return undefined;
}
