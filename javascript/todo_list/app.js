let list = [];

let menu = 0;
while (menu !== "quit") {
    menu = prompt("What would you like to do?");
    if (menu === "add") {
        let response = prompt("Enter new todo.");
        list.push(response)
        console.log(`${response} added to todo.`)
    } else if (menu === "list") {
        let index = 0;
        console.log("********")
        for (let line of list) {
            console.log(`${index}: ${line}`)
            index++
        }
        console.log("********")
    } else if (menu === "delete") {
        let deleteInd = parseInt(prompt("Enter a index to delete:"));
        let deleted = list.splice(deleteInd, 1);
        console.log(`${deleted} has been deleted.`)
    }
}
console.log("You have chosen to quit.")