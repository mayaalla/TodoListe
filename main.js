let add = document.getElementById('add');
let clear= document.getElementById('clear');
let deleteTask = document.querySelectorAll('.task-delete');
let check = document.querySelectorAll('.task-check');
let todo = document.getElementById('todo');
let x = 0;
function checkTask(check){
    check.forEach(function(item){
        item.onclick = function(){
            if(item.innerHTML != "✓"){
            let id = item.id - 1;
            let desc = document.getElementById(id);
            desc.style.textDecoration = "line-through";
            desc.style.color = "rgb(184, 184, 184)";
            todo.focus();
            item.innerHTML = "✓";
            item.style.backgroundColor = "#28fb36";
        }else{
            let id = item.id - 1;
            let desc = document.getElementById(id);
            desc.style.textDecoration = "none";
            desc.style.color = "white";
            todo.focus();
            item.innerHTML = "";
            item.style.backgroundColor = "white";
        }
    }
    })
}
function deletetask(deleteTask){
    deleteTask.forEach(function(item){
        item.onclick = function(){
            let id = item.id - 3;
            let li = document.getElementById(id);
            li.remove();
            todo.focus();
        }
    })
}
add.onclick = function(){
    if(todo.value !== ""){
        list.innerHTML += `<li id="${x}"> <div class="task-cntnr"> <P class="tsk-desc" id="${x+1}"> ${todo.value} </P></div> <div class="boxes"> <button class="task-check" id="${x + 2}"></button> <button class="task-delete" id="${x + 3}">X</button> </div></li>`
        x = x+4;
        let check = document.querySelectorAll('.task-check');
        console.log(check);
        let deleteTask = document.querySelectorAll('.task-delete');
        checkTask(check);   
        deletetask(deleteTask);
        todo.focus();
    }
    todo.focus();
}
clear.onclick = function(){
    if(todo.value != " "){
        todo.value = "";
    }
    todo.focus();
}
todo.focus();