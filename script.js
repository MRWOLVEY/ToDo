var input=document.querySelector("input");
var btn=document.querySelector("#submit");
var ul=document.getElementsByTagName("ul")[0];

function rep(e){
    var nlibtn=document.createElement("button");
    nlibtn.classList.add("libtn");
    nlibtn.append(document.createTextNode(input.value));
    var npopbtn=document.createElement("button");
    npopbtn.classList.add("pop");
    npopbtn.append(document.createTextNode("pop!"));
    var li=document.createElement("li");
    li.append(nlibtn);li.append(npopbtn);
    ul.append(li);
    input.value="";
}

btn.addEventListener("click",function clis(e) {
    if(input.value.length>0 && input.value[0].charCodeAt(0)>32){
        rep(e);
    }
})


input.addEventListener("keypress",function kplis(e){
    if(input.value.length>0 && input.value[0].charCodeAt(0)>32 && e.key === "Enter"){
        rep(e)
    }
})


function toggledone(e){
    if(e.target.className === "libtn"||e.target.className === "libtn done"){
        e.target.classList.toggle("done");
    }
}

function deleteparent(e){
    if(e.target.className === "pop"){
        e.target.parentElement.remove();
    }
}

function handleUI(e){
    toggledone(e);
    deleteparent(e);
}

ul.addEventListener("click",handleUI);