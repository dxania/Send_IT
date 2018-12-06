"use strict";

function nots(parcel_id){
    var cancel = document.getElementById("cancelParcel");
    var dropdown = document.getElementById("not");
    cancel.onclick = function(){
        alert("cancel req sent");
        console.log(parcel_id);
        document.getElementById("cancelModal").style.display = 'none';
        document.getElementById("cancelbtn").disabled = true;
        var not = document.getElementById("nots");
        var noT = `<a href="#">Cancel order ${parcel_id}</a>`;

        not.innerHTML += noT;
        var notss = [];
        notss.forEach(noT =>{
            notss.push(noT);
        })
        console.log(notss.length);
        document.getElementById("number").innerHTML = (notss.length);
        if(noT){
            document.querySelector("#number").style.color = 'blue';
        }
    }
    dropdown.onclick = function(){
        document.getElementById("number").style.display = 'none';
    }
}