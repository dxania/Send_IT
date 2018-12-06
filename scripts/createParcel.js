"use strict";

(function username(){
    var uname = localStorage.getItem("username");
    document.querySelector('#usernayme').innerHTML = uname;
})();

(function(){
    createParcelModal();
})();

function createParcelModal(){
    var modal = document.getElementById('parcelModal');
    var button = document.getElementById("new");
    var close = document.getElementsByClassName("closeButton")[0];
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

function cancel(){
    document.getElementById('parcelModal').style.display = 'none';
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
    var destination = document.querySelector("#parcel_destination").value;
    var weight = document.querySelector("#weight").value;

    var parceldata = {
        "recipient_name":recipient_name,
        "recipient_mobile":parseInt(recipient_mobile),
        "pickup_location":pickup_location,
        "destination":destination,
        "weight":parseInt(weight)
    };

    var token = localStorage.getItem("access_token");

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
                alert((data).message);
                window.location.reload();
                document.querySelector("#parcelForm").reset();
            }else{
                var errmsg = (data).message;
                document.getElementById("error").innerHTML = errmsg;
            }
        }).catch(error => {
            console.log(error);
            handleError(error);
        })
}

function viewParcelModal(parcelId){
    getParcel(parcelId);
    var modal = document.getElementById('detailsModal');
    var button = document.getElementById("myBtn");
    // var span = document.getElementsByClassName("close")[0];
    button.onclick = function() {
        modal.style.display = "block";
    };
    // span.onclick = function() {
    //     modal.style.display = "none";
    // };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}