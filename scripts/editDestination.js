"use strict";

function editPresentDestination(parcel_id){
    var token = localStorage.getItem("access_token");
    var newDestination = {"destination": document.getElementById('destination').value}

    fetch(`http://localhost:5000/api/v1/parcels/${parcel_id}/destination`,{
        method: 'put',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(newDestination)
    }).then(response => response.json())
    .then(resdata => {
        alert(resdata.message);
        window.location.reload();

    })
}

function editDestination() {
    var editDestinationButton = document.getElementById('editDestinationButton')
    var destination = document.getElementById('destination')
    var saveDestinationChangeButton = document.getElementById('saveDestinationChangeButton')
    var cancelDestinationEditButton = document.getElementById('cancelDestinationEditButton')
    var presentDestination = document.getElementById('presentDestination')

    editDestinationButton.style.display = 'none';
    destination.style.display = 'inline';
    saveDestinationChangeButton.style.display = 'inline';
    cancelDestinationEditButton.style.display = 'inline';
    presentDestination.style.display = 'none';
    destination.value = presentDestination.innerHTML;

    // editDestinationButton.style.display = 'inline';
    // destination.style.display = 'none';
    // saveDestinationChangeButton.style.display = 'none';
    // cancelDestinationEditButton.style.display = 'none';
    // presentDestination.style.display = 'inline';
    // destination.value = presentDestination.innerHTML;

};

function saveNewDestination(parcel_id){
    editPresentDestination(parcel_id);
    var editDestinationButton = document.getElementById('editDestinationButton')
    var destination = document.getElementById('destination')
    var saveDestinationChangeButton = document.getElementById('saveDestinationChangeButton')
    var cancelDestinationEditButton = document.getElementById('cancelDestinationEditButton')
    var presentDestination = document.getElementById('presentDestination')

    editDestinationButton.style.display = 'inline';
    destination.style.display = 'none';
    saveDestinationChangeButton.style.display = 'none';
    cancelDestinationEditButton.style.display = 'none';
    presentDestination.style.display = 'inline';
    presentDestination.value = destination.innerHTML;
}

function cancelDestinationEdit(){
    var editDestinationButton = document.getElementById('editDestinationButton')
    var destination = document.getElementById('destination')
    var saveDestinationChangeButton = document.getElementById('saveDestinationChangeButton')
    var cancelDestinationEditButton = document.getElementById('cancelDestinationEditButton')
    var presentDestination = document.getElementById('presentDestination')

    editDestinationButton.style.display = 'inline';
    destination.style.display = 'none';
    saveDestinationChangeButton.style.display = 'none';
    cancelDestinationEditButton.style.display = 'none';
    presentDestination.style.display = 'inline';
}