
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

/*const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        console.log("aa");
    } else {
        title.style.color = BASE_COLOR;
        console.log("bb");
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();

function handleOnline(){
    console.log("Welcome");
}

function handleOffline(){
    console.log("Bye");
}

window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);
*/
/*
function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greetJehun = sayHello("Jehun", 15);
console.log(greetJehun)

const cal = {
  plus: function(a, b){
    return a+b;
  }
  minus: function(a, b){
    return a-b;
  }
  multiple: function(a, b){
    return a*b;
  }
  divide: function(a, b){
    return a/b;
  }
}

const plus = cal.plus(5,5);
console.log(plus);

const jehunInfo = {
  name: "jehun",
  age: 33,
  gender: "Male",
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood:[
    {
      name: "Kimchi",
      fatty: false
    },
    {
      name: "Pizza",
      fatty: true
    }
  ]
}
*/