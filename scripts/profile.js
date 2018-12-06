"use strict";

(function username(){
    var uname = localStorage.getItem("username");
    document.querySelector('#usernayme').innerHTML = uname;
})();

(function userProfile(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.user.user_id);
        let info = `
        ID: ${userinfo.user.user_id}<br>
        User name: ${userinfo.user.user_name}<br>
        Email Address: ${userinfo.user.user_email}
        `
    document.getElementById('info').innerHTML = info;
    })
})();


(function totalNoOfUserParcels(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}/parcels`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.number[0]);
        let ttl = `
        ${userinfo.number[0]}
        `
    document.getElementById('total').innerHTML = ttl;
    })
})();

(function totalNoOfCancelledUserParcels(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}/parcels/cancelled`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.number[0]);
        let ttl = `
        ${userinfo.number[0]}
        `
    document.getElementById('cancelled').innerHTML = ttl;
    })
})();

(function totalNoOfPendingUserParcels(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}/parcels/pending`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.number[0]);
        let ttl = `
        ${userinfo.number[0]}
        `
    document.getElementById('pending').innerHTML = ttl;
    })
})();

(function totalNoOfDeliveredUserParcels(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}/parcels/delivered`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.number[0]);
        let ttl = `
        ${userinfo.number[0]}
        `
    document.getElementById('delivered').innerHTML = ttl;
    })
})();

(function totalNoOfIntransitUserParcels(){
    var token = localStorage.getItem("access_token");
    var user_name = localStorage.getItem("username");

    fetch(`http://127.0.0.1:5000/api/v1/users/${user_name}/parcels/intransit`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(userinfo => {
        console.log(userinfo.number[0]);
        let ttl = `
        ${userinfo.number[0]}
        `
    document.getElementById('intransit').innerHTML = ttl;
    })
})();

