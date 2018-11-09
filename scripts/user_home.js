(function(){
    view();
    new_parcel();
    ban();
    edit();
    hideModal();
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
    // var span = document.getElementsByClassName("close")[0];
    // modal.style.display = "none";
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
}

// new_parcel()


function ban(){
    var modal = document.getElementById('cancelModal');
    var btn = document.getElementById("cancel");
    btn.onclick = function() {
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function edit(){
    var modal = document.getElementById('editModal');
    var btn = document.getElementById("edit");
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function hideModal(){
    var modal = document.getElementById('editModal');
    var btn = document.getElementById("cancel");
    btn.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



// function addField(n)
// {
//     var tr = n.parentNode.parentNode.cloneNode(true);
//     document.getElementById('table').appendChild(tr);
// }

function addField(tableID){
    var table=document.getElementById(tableID)
    for(var l = 0; l < 2; l++){ 
	    var cl = table.tBodies[0].rows[l].cloneNode(true)
	    table.tBodies[0].appendChild( cl ) 
    }
}

// function product(name, size){
//     var row = '<tr><td><input type="text" placeholder="Shoes" value='+name+'></td><td><input type="number" placeholder="88"></td><td><input type="number" placeholder="900"></td><td><input type="number" placeholder="79000"></td></tr>';
//     document.getElementById('tbody').innerHTML = row;
// }

