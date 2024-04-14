let count = document.getElementById("counter");

function onDecrement(){
    let value = count.textContent;
    let updatedvalue = parseInt(value)-1;
    count.textContent = updatedvalue;
    if(updatedvalue<0){
        count.style.color = "red";
    } else if(updatedvalue>0){
        count.style.color = "green";
    } else {
        count.style.color = "black";
    }
}

function onReset(){
    count.textContent = 0;
    count.style.color = "black";
}

function onIncrement(){
    let value = count.textContent;
    let updatedvalue = parseInt(value)+1;
    count.textContent = updatedvalue;
    if(updatedvalue<0){
        count.style.color = "red";
    } else if(updatedvalue>0){
        count.style.color = "green";
    } else {
        count.style.color = "black";
    }
}
