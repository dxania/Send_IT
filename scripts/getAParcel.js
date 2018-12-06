"use strict";

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
        console.log(resdata.parcel);
        parcelData = `
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
            </div>`;
        // document.querySelector('#details').innerHTML = parcelData;
        // document.querySelector('#details').innerHTML = "parcelData";
        document.getElementById('details').innerHTML = "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
    })
}