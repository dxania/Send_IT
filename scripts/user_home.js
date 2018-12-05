"use strict";

(function(){
    createParcelModal();
    // createParcel();
    viewParcelModal();
    cancelParcelModal();
})();

function createParcelModal(){
    var modal = document.getElementById('parcelModal');
    var button = document.getElementById("new");
    var close = document.getElementsByClassName("closebtn")[0];
    button.onclick = function() {
        modal.style.display = "block";
    };
    close.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}


// (function openModal(modalId, buttonId, closeId){
//     var modal = document.getElementById(modalId);
//     var button = document.getElementById(buttonId);
//     var close = document.getElementsByClassName(closeId)[0];
//     button.onclick = function() {
//         modal.style.display = "block";
//     };
//     close.onclick = function() {
//         modal.style.display = "none";
//     };
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// })();


function createParcel(){
    var recipient_name = document.querySelector("#recipient_name").value;
    var recipient_mobile = document.querySelector("#recipient_mobile").value;
    var pickup_location = document.querySelector("#pickup_location").value;
    var destination = document.querySelector("#destination").value;
    var weight = document.querySelector("#weight").value;

    // console.log(weight);
    // console.log("recipient_name");

    var parceldata = {
        "recipient_name":recipient_name,
        "recipient_mobile":parseInt(recipient_mobile),
        "pickup_location":pickup_location,
        "destination":destination,
        "weight":parseInt(weight)
    };

    var token = localStorage.getItem("access_token");

    // console.log(parceldata);
    // console.log(localStorage.getItem("access_token"));

    fetch('http://localhost:5000/api/v1/parcels',{
        method: 'post',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(parceldata)
    })
        .then(response => response.json())
        .then((data) => {
            if((data).message === "Parcel successfully created"){
                alert('Parcel successfully created');
            }else{
                var errmsg = (data).message;
                // document.getElementById("errs").innerHTML = errmsg;
                alert(errmsg);
            }
        }).catch(error => {
            console.log(error);
            handleError(error);
        })
        // .catch(err => console.log(err))
}

function viewParcelModal(){
    var modal = document.getElementById('myModal');
    var button = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    button.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function cancelParcelModal(){
    var modal = document.getElementById('cancelModal');
    var button = document.getElementById("cancel");
    var closeModal = document.getElementsByClassName("closeCancel")[0];
    button.onclick = function() {
        modal.style.display = "block";
    };
    closeModal.onclick = function(){
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// function addField(tableID){
//     var table=document.getElementById(tableID)
//     for(var l = 0; l < 2; l++){
// 	    var cl = table.tBodies[0].rows[l].cloneNode(true)
// 	    table.tBodies[0].appendChild( cl )
//     }
// }


