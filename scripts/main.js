(function(){
    editLocation();
    saveNewLocation();
    cancelLocationEdit();
})()

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