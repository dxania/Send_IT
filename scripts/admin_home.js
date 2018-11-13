(function(){
    edit();
    save();
    cancelEdit();
    view();
})()


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