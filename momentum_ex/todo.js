const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

// Todo 를 localstorage에 저장
function saveToDos(){
    //localstorage에 toDos 저장.
    //string으로 저장하기 위해 JSON.stringify() 사용
    console.log(toDos);
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// Todo 추가하는 function
function paintToDo(text){
    // html의 li, button, span element 생성
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌"
    span.innerText = text;

    // li에 span, delBtn을 상속(?) 시킴
    // 무튼 li 밑에 딸려가도록 함
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    // toDoList 에 상속시킴
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

// Submit 에 대한 event 처리 function
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// localstorage에 저장되어 있는 ToDos를 loading 하기 위한 function
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // localstorage에는 string으로 data가 저장되어 있기 때문에
        // JSON.parse() 를 이용해서 data type에 맞게 추출
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();