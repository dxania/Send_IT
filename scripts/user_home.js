(function(){
    view();
    new_parcel();
    ban();
})()

function view(){
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function new_parcel(){
    var modal = document.getElementById('parcelModal');
    var btn = document.getElementById("new");
    var close = document.getElementsByClassName("closebtn")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    close.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function ban(){
    var modal = document.getElementById('cancelModal');
    var btn = document.getElementById("cancel");
    var closeModal = document.getElementsByClassName("closeCancel")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    closeModal.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function addField(tableID){
    var table=document.getElementById(tableID)
    for(var l = 0; l < 2; l++){ 
	    var cl = table.tBodies[0].rows[l].cloneNode(true)
	    table.tBodies[0].appendChild( cl ) 
    }
}


