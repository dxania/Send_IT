function edit() {
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
    // editStatusInput.value = parcelStatus.innerHTML;
    
};

function save(){
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

function saveNewLocation(){
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
