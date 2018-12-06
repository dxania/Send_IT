"use strict";

(function username(){
    var uname = localStorage.getItem("username");
    document.querySelector('#usernayme').innerHTML = uname;
})();

(function getUsers(){
    var token = localStorage.getItem("access_token");

    fetch('http://localhost:5000/api/v1/users',{
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(resdata => {
        console.log(resdata.users);
        let userdata = '';
        resdata.users.forEach(user => {
            var acctype = '';
            if(user.admin_status == true){
                acctype = 'Admin';
            }else{
                acctype = 'Normal user';
            }
            userdata += `
            <tr>
                <td>${user.user_id}</td>
                <td>${user.user_name}</td>
                <td>${user.user_email}</td>
                <td>${acctype}</td>
                <td><button onclick="changeUserRole(${user.user_id});">Change User Role</button></td>
            </tr>`
        });
        document.querySelector('tbody').innerHTML = userdata;
    })
})();

function changeUserRole(user_id){
    var token = localStorage.getItem("access_token");

    fetch(`http://localhost:5000/api/v1/users/${user_id}/role`,{
        method:'put',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }).then(response => response.json())
    .then(resdata => {
        alert(resdata.message);
        window.location.reload();
    })
}