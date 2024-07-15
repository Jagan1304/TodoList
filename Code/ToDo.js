let toDo = JSON.parse(localStorage.getItem('List'));
if(!toDo){
    toDo = [];
}
function addTodo(){
    const textInput = document.querySelector('.js-todo-text');
    const dateInput = document.querySelector('.js-todo-date');
    toDo.push({
        Name: textInput.value,
        Date: dateInput.value
    });
    textInput.value = '';
    dateInput.value = '';
    printResult();
    
}

function printResult(){
    
    let htmlOutput = document.querySelector('.js-result');
    htmlOutput.innerHTML = '';
    for(let i=0;i<toDo.length;i++){
        htmlOutput.innerHTML+=`
            <div>${toDo[i].Name}</div>
            <div>${toDo[i].Date}</div>
            <button class="todo-delete" onclick="toDo.splice(${i},1);printResult()">Delete</button>
        `;
    } 
    localStorage.setItem('List',JSON.stringify(toDo));
}