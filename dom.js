function validation(){
    let input = document.getElementById("input").value;
    let text;
    if(isNaN(input) || input < 1 || input > 10){
        text = "Input is Invalid !!"
        document.querySelector("#info").style.color = "red"
    }
    else{
        text = "Valid !!"
        document.querySelector("#info").style.color = "green"
}
    document.getElementById("info").innerHTML = text
}


const btn = document.createElement("button")
btn.innerText ="submit" ;

btn.setAttribute("class", "primary")
btn.setAttribute("type","submit")
btn.setAttribute("onclick", "validation()");

let card = document.getElementById("card")
card.appendChild(btn)

const title = document.getElementById("submit")
title.remove()  