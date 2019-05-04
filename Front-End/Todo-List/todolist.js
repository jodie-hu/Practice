var todoArr = [];
var inputEl = document.getElementById('input');
var todoListEl = document.querySelector('.task-box'); 
var taskEl = document.getElementById('task');
var containEl = document.querySelector('.tab-content');
var clickItemEl = document.querySelector('.tab-item');
// var radioEl = document.querySelector('.flex-container'); 


/*監聽Enter事件*/
inputEl.addEventListener('keydown',function(e){
  /*當按下enter取得input的值*/
  if(e.keyCode == 13){
    var userInput = inputEl.value;
    inputEl.value = '';
    // todoArr.push(userInput);
    //  updateView(userInput);
    if (checkInputValid(userInput)) {
      addItem(userInput);
      updateView();
    }
  };
});

/*輸入空白跳出訊息*/
function checkInputValid(userInput) {
  if (!userInput) {
    alert('請輸入內容');
    return false;
  }
  return true;
}

/*動態元素建立tasklist*/
function updateView(){  
  todoListEl.innerHTML = '';
  //從localStorage取出//
  getList().forEach(function(todoItem){
    var taskInput = document.createElement('input');
    taskInput.type = 'checkbox';

    var taskCheckbox = document.createElement('div');
    taskCheckbox.className = 'task-check';

    taskCheckbox.appendChild(taskInput);
    
    var taskList = document.createElement('div');
    taskList.className = 'task-list';
    taskList.appendChild(taskCheckbox);

   
    var taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = todoItem.title;
    taskItem.addEventListener('click', function() {
      taskList.classList.add('l-click');
      showDetail(todoItem);
      
    });
    
    var trashIcon = document.createElement('i');
    trashIcon.className = 'far fa-trash-alt trash';
    trashIcon.addEventListener('click', function() {
      if (confirm('Are you sure?')) {
        removeItem(todoItem);
        updateView();
      }
    });
    
    taskList.appendChild(taskItem);
    taskList.appendChild(trashIcon);
        
    todoListEl.appendChild(taskList);
  });
};

/*撈出localStorage*/
function getList(){
  if(localStorage.todo) {
    return JSON.parse(localStorage.todo);
  }
  else {
    return [];
  };
};

function createTodoItem(title) {
  return {
    id: Math.floor(Math.random() * 10000000000),
    title: title,
    content: ''
  };
}

function updateTodoItem() {

}

function showDetail(todoItem) {
  containEl.innerHTML = '';
  var containInput = document.createElement('input');
  containInput.type = 'text';
  containInput.value = todoItem.title;
  containInput.className = 'content-title content-text placeholder-style';

  var containTitle = document.createElement('div');
  containTitle.className = 'content-header';

  containTitle.appendChild(containInput);

  var containTextarea = document.createElement('textarea');
  containTextarea.placeholder = '描述內容';
  containTextarea.className = 'textarea-content content-text placeholder-style';

  var containTextareaDiv = document.createElement('div');
  containTextareaDiv.className = 'content-text';

  containTextareaDiv.appendChild(containTextarea);

  containEl.appendChild(containTitle);
  containEl.appendChild(containTextareaDiv);

}

/*將input值儲存至localStorage*/
function addItem(userInput){
  var todo = getList();
  todo.push(createTodoItem(userInput));
  localStorage.todo = JSON.stringify(todo);
};

function removeItem(todoItem) {
  var todoItems = getList();
  var theItem = todoItems.find(function(item){
    return item.id == todoItem.id;
  });
  todoItems.splice(todoItems.indexOf(theItem), 1);
  localStorage.todo = JSON.stringify(todoItems);
}

updateView();
showDetail();


