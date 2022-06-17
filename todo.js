let input = prompt("what whould you like to do??");
const todos = ['egges', 'chickens'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********')
    } else if (input === 'new') {
        const newToDo = prompt("ok, what is new to do");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`);
    }
    else if (input === 'delete') {
        const deleteToDo = parseInt(prompt("which index would you like to delete???"));
        if (!Number.isNaN(deleteToDo)) {
            // todos.shift(deleteToDo);
            todos.splice(deleteToDo, 1);// start,how many you want to delete , and end
            console.log(`${deleteToDo}:is deleted from the list`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt("what whould you like to do??");
}
console.log('ok you quit the app');