"use strict";

(function username(){
    var uname = localStorage.getItem("username");
    document.querySelector('#usernayme').innerHTML = uname;
})();

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
            // if(parcel.status == 'cancelled'){
            //     console.log(parcel);
            //     document.getElementById('editStatusButton').disabled = true;
            //     document.getElementById('editStatusButton').style.display = 'none';
            // }
            tdata += `
            <tr>
                <td>${parcel.parcel_id}</td>
                <td>${parcel.created_by}</td>
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
                    <button id="myBtn" onclick="viewParcelDetails(${parcel.parcel_id})"><i class="fa fa-fw fa-eye"></i>View</button>
                </td>
            </tr>`;
        });
        document.querySelector('tbody').innerHTML = tdata;
    })
})();


(function getUserParcels(){
    var token = localStorage.getItem("access_token");
    var playload = JSON.parse(atob(token.split('.')[1]));
    console.log(playload.identity.id);
    var user_id = playload.identity.id;

    fetch(`http://localhost:5000/api/v1/users/${user_id}/parcels`,{
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
                <td>${parcel.status}</td>
                <td>${parcel.present_location}</td>
                <td><span id="presentDestination">${parcel.destination}</span>
                    <input type="text" id="destination">
                    <button id="editDestinationButton" onclick="editDestination();">Change</button>
                    <button id="saveDestinationChangeButton" onclick="saveNewDestination(${parcel.parcel_id});">Save Changes</button>
                    <button id="cancelDestinationEditButton" type="reset" onclick="cancelDestinationEdit();">Cancel</button>
                </td>
                <td>
                    <button id="myBtn" onclick="viewParcelDetails(${parcel.parcel_id});"><i class="fa fa-fw fa-eye"></i> View</button>
                    <button id="cancelbtn" onclick="cancelParcelModal(${parcel.parcel_id});"><i class="fa fa-fw fa-ban"></i> Cancel</button>
                </td>
            </tr>
            </tr>`;
        });
        document.querySelector('#parcels').innerHTML = tdata;
    })
})();



function viewParcelDetails(parcelId){
    var modal = document.getElementById('details');
    // var modal = document.querySelector('#details');
    modal.style.display = "block";
    getAParcel(parcelId)
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

function cancelParcelModal(parcel_id){
    var modal = document.getElementById('cancelModal');
    var button = document.getElementById("cancelbtn");
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
    nots(parcel_id);
    var cancelbutton = document.getElementById("cancelcancel");
    cancelbutton.onclick = function(){
        modal.style.display = "none";
    }
}
