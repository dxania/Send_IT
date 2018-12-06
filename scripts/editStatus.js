"use strict";

function editstatus(parcel_id){
    var token = localStorage.getItem("access_token");
    var newStatus = {"status": document.getElementById('editStatusInput').value}

    fetch(`http://localhost:5000/api/v1/parcels/${parcel_id}/status`,{
        method: 'put',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(newStatus)
    }).then(response => response.json())
    .then(resdata => {
        alert(resdata.message);
        window.location.reload();
    })
}

function edit(parcelId) {
    var editStatusButton = document.getElementById('editStatusButton')
    var editStatusInput = document.getElementById('editStatusInput')
    var saveStatusChangeButton = document.getElementById('saveStatusChangeButton')
    var cancelEditButton = document.getElementById('cancelEditButton')
    var parcelStatus = document.getElementById('parcelStatus')

    editStatusButton.style.display = 'none';
    editStatusInput.style.display = 'inline';
    saveStatusChangeButton.style.display = 'inline';
    cancelEditButton.style.display = 'inline';
    parcelStatus.style.display = 'none';

    console.log(parcelId);
}


function save(parcel_id){
    editstatus(parcel_id)
    var editStatusButton = document.getElementById('editStatusButton')
    var editStatusInput = document.getElementById('editStatusInput')
    var saveStatusChangeButton = document.getElementById('saveStatusChangeButton')
    var cancelEditButton = document.getElementById('cancelEditButton')
    var parcelStatus = document.getElementById('parcelStatus')

    editStatusButton.style.display = 'inline';
    editStatusInput.style.display = 'none';
    saveStatusChangeButton.style.display = 'none';
    cancelEditButton.style.display = 'none';
    parcelStatus.style.display = 'inline';
    parcelStatus.value = editStatusInput.innerHTML;
}

function cancelEdit(){
    var editStatusButton = document.getElementById('editStatusButton')
    var editStatusInput = document.getElementById('editStatusInput')
    var saveStatusChangeButton = document.getElementById('saveStatusChangeButton')
    var cancelEditButton = document.getElementById('cancelEditButton')
    var parcelStatus = document.getElementById('parcelStatus')

    editStatusButton.style.display = 'inline';
    editStatusInput.style.display = 'none';
    saveStatusChangeButton.style.display = 'none';
    cancelEditButton.style.display = 'none';
    parcelStatus.style.display = 'inline';
}