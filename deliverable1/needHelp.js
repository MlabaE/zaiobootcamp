var modal = document.getElementById("needHelpModal");

var lnk = document.getElementById("needHelplnk");

var span = document.getElementsByClassName("close")[0];

lnk.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        this.modal.style.display = "none";
    }
}