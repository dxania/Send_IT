"use strict";

(function getParcels(){
    var token = localStorage.getItem("access_token");

    fetch('http://localhost:5000/api/v1/parcels',{
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(res => {
        let tdata = '';
        res.parcels.forEach(parcel => {
            tdata += `
            <tr>
                <td>${parcel.parcel_id}</td>
                <td><span id="parcelStatus">${parcel.status}</span>
                    <select id="editStatusInput">
                        <option value="delivered">Delivered</option>
                        <option value="pending">Pending</option>
                        <option value="intransit">In-transit</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    <button id="editStatusButton" onclick="edit(${parcel.parcel_id});">Change</button>
                    <button id="saveStatusChangeButton" onclick="save(${parcel.parcel_id});">Save Changes</button>
                    <button id="cancelEditButton" type="reset" onclick="cancelEdit();">Cancel</button>
                </td>
                <td>
                    <span id="presentLocation">${parcel.present_location}</span>
                    <input type="text" id="location">
                    <button id="editLocationButton" onclick="editLocation(${parcel.parcel_id});">Change</button>
                    <button id="saveLocationChangeButton" onclick="saveNewLocation(${parcel.parcel_id});">Save Changes</button>
                    <button id="cancelLocationEditButton" type="reset" onclick="cancelLocationEdit();">Cancel</button>
                </td>
                <td>
                    <button id="myBtn" onclick="view(${parcel.parcel_id})"><i class="fa fa-fw fa-eye"></i>View</button>
                </td>
            </tr>`;
        });
        document.querySelector('tbody').innerHTML = tdata;
    })
    .then(message => {
        alert(message.msg);
    })
})();


function getAParcel(parcelid){
    var token = localStorage.getItem("access_token");
    fetch(`http://localhost:5000/api/v1/parcels/${parcelid}`,{
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(resdata => {
        data = `
            <div class="modal-content">
                <div class="modal-header">
                    <p><b>Date</b>: 2018-10-11 10:00:00</p>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <p><b>Parcel ID.</b>: ${resdata.parcel.parcel_id}</p>
                    <p><b>Recipient Name</b>: ${resdata.parcel.recipient_name}</p>
                    <p><b>Recipient Mobile</b>: ${resdata.parcel.recipient_mobile}</p>
                    <p><b>Status</b>: ${resdata.parcel.status}</p>
                    <p><b>Pick up Location</b>: ${resdata.parcel.pickup_location}</p>
                    <p><b>Destination</b>: ${resdata.parcel.destination}</p>
                    <p><b>Present Location</b>: ${resdata.parcel.present_location}</p>
                </div>
                <div class="modal-footer">
                <span>Created by: ${resdata.parcel.user_name}</span>
                <div id="right">Total Weight(kg): ${resdata.parcel.weight} <br>
                    Total Amount: ${resdata.parcel.total_price}
                </div>
                </div>
            </div>`
        document.getElementById('myModal').innerHTML = data;
    })
}

function view(parcelId){
    var modal = document.getElementById('myModal');
    getAParcel(parcelId)
    modal.style.display = "block";
    // var w = document.querySelector(".close");
    // w.onclick = function() {
    //     modal.style.display = "none";
    // };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}


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
        if (resdata.message === `Status of parcel ${parcel_id} changed to ${newStatus}`){
            alert(resdata.message)
            window.location.reload();
        }else{
            alert(resdata.message);
        }
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
    // editStatusInput.value = parcelStatus.innerHTML;
    console.log(parcelId);

};

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
        if (resdata.message === `Present location of parcel ${parcel_id} changed to ${present_location}`){
            alert(resdata.message);
        }else{
            alert(resdata.message);
        }
    })
}

function editLocation(parcelId) {
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

    console.log(parcelId);
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
