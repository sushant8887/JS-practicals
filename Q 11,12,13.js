//11 Practical
const ul = document.getElementById("first");
const list = document.createElement("li");
ul.appendChild(list);
list.innerText="Node js";

//12 practical
function fry(){
    alert("Daba Chuke Ho side ka  bhi daba do!!!")
}

const b=document.getElementById("mybutton");
b.setAttribute("onclick","fry()");