let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;
    let button=document.createElement("button");
    button.innerText="delete";
    ul.appendChild(li);
    li.appendChild(button);
    inp.value="";

})
ul.addEventListener("click",function(){
    let listItem=event.target.parentElement;
    if(event.target.nodeName="BUTTON"){
        listItem.remove();
    }
})
