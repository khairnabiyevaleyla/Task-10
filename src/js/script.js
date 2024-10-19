const todoList = document.getElementById('todo-list');
const enterItem = document.getElementById('enter-item');
const submitButton = document.getElementById('submit-btn');
const taskCount = document.getElementById('taskCount');

showToDoList();

function totalCount(){
    const totalItems = todoList.children.length;
    taskCount.textContent = totalItems;
 }

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(enterItem.value !== ""){
        const listText = enterItem.value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `${listText} <button class="delete-btn">Delete</button>`;
        todoList.appendChild(listItem);
      
        saveToDoList();
        enterItem.value = '';
        totalCount();
        
    }
})

todoList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        todoList.removeChild(listItem);

        saveToDoList(); 
        totalCount();
    }
})

function saveToDoList(){
    let lists = [];
    todoList.querySelectorAll("li").forEach(function(enterItem){
        lists.push(enterItem.childNodes[0].textContent.trim());
    });

    localStorage.setItem('lists', JSON.stringify(lists));
}

function showToDoList(){
    const lists = JSON.parse(localStorage.getItem('lists'))

    lists.forEach(listText => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${listText} <button class="delete-btn">Delete</button>`;
        todoList.appendChild(listItem);
    });

    totalCount();
}





