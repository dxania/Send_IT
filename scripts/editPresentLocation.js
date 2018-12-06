"use strict";

function editPresentLocation(parcel_id){
    var token = localStorage.getItem("access_token");
    var newLocation = {"present_location": document.getElementById('location').value}

    fetch(`http://localhost:5000/api/v1/parcels/${parcel_id}/present_location`,{
        method: 'put',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(newLocation)
    }).then(response => response.json())
    .then(resdata => {
        alert(resdata.message);
        window.location.reload();

    })
}

function editLocation() {
    var editLocationButton = document.getElementById('editLocationButton')
    var location = document.getElementById('location')
    var saveLocationChangeButton = document.getElementById('saveLocationChangeButton')
    var cancelLocationEditButton = document.getElementById('cancelLocationEditButton')
    var presentLocation = document.getElementById('presentLocation')

    editLocationButton.style.display = 'none';
    location.style.display = 'inline';
    saveLocationChangeButton.style.display = 'inline';
    cancelLocationEditButton.style.display = 'inline';
    presentLocation.style.display = 'none';
    location.value = presentLocation.innerHTML;
};

function saveNewLocation(parcel_id){
    editPresentLocation(parcel_id);
    var editLocationButton = document.getElementById('editLocationButton')
    var location = document.getElementById('location')
    var saveLocationChangeButton = document.getElementById('saveLocationChangeButton')
    var cancelLocationEditButton = document.getElementById('cancelLocationEditButton')
    var presentLocation = document.getElementById('presentLocation')

    editLocationButton.style.display = 'inline';
    location.style.display = 'none';
    saveLocationChangeButton.style.display = 'none';
    cancelLocationEditButton.style.display = 'none';
    presentLocation.style.display = 'inline';
    presentLocation.value = location.innerHTML;
}

function cancelLocationEdit(){
    var editLocationButton = document.getElementById('editLocationButton')
    var location = document.getElementById('location')
    var saveLocationChangeButton = document.getElementById('saveLocationChangeButton')
    var cancelLocationEditButton = document.getElementById('cancelLocationEditButton')
    var presentLocation = document.getElementById('presentLocation')

    editLocationButton.style.display = 'inline';
    location.style.display = 'none';
    saveLocationChangeButton.style.display = 'none';
    cancelLocationEditButton.style.display = 'none';
    presentLocation.style.display = 'inline';
}