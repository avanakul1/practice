var score=0;
function update(){
 score+=1;
document.getElementById("display").innerHTML=score;

}

function save(){
    localStorage.setItem("point", score);

}


function next(){

    window.location="https://www.w3schools.com/cssref/";
}

