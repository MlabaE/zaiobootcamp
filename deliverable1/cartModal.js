var modal = document.getElementById("cartModal");

var btn = document.getElementById("cartBtn");

var span = document.getElementsByClassName("close")[0];

var lb = document.getElementById("cartLabel");

var val = document.getElementById("label")

btn.onclick = function(){
    modal.style.display = "block";
    lb.innerHTML=val;
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        this.modal.style.display = "none";
    }
}