const list = [];
let menu = prompt("What would you like to do?");
while (menu !== "quit" && menu !== "q") {
    if (menu === "add") {
        const response = prompt("Enter new todo.");
        list.push(response);
        console.log(`${response} added to todo.`)
    } else if (menu === "list") {
        console.log("********")
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log("********")
    } else if (menu === "delete") {
        const deleteInd = parseInt(prompt("Enter a index to delete:"));
        const deleted = list.splice(deleteInd, 1);
        console.log(`${deleted} has been deleted.`)
    }
    menu = prompt("What would you like to do?");
}
console.log("You have chosen to quit.")