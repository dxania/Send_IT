"use strict";

function signup(){
    let user_name = document.getElementById("user_name").value;
    let user_email = document.getElementById("user_email").value;
    let user_password = document.getElementById("user_password").value;

    console.log(user_name +"" + user_email + ""+ user_password);

    let formdata = {
        "user_name":user_name,
        "user_email":user_email,
        "user_password":user_password
    }
    console.log(formdata);

    fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
        method: 'post',
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(formdata)
    })
        .then(response => response.json())
        .then(data => {
            if(data.message === "User " + user_name + " successfully created"){
                alert(user_name + ' successfully registered. Login to proceed');
                focusLogin();
            }else{
                let errmsg = data.message;
                document.getElementById("errs").innerHTML = errmsg;
            }
        }).catch(error => {
            console.log(error);
            handleError(error);
        })
}

function login() { 
    let username = document.getElementById("login_name").value;
    let password = document.getElementById("login_password").value;
    console.log(username + password);
    let formdata = {
        "user_name":username,
        "user_password":password
    }
    fetch('http://127.0.0.1:5000/api/v1/auth/login',{
        method: 'post',
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(formdata)
    }).then(res => res.json())
        .then((data) => {
            let access_token = (data).access_token;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("username", username);
            var playload = JSON.parse(atob(access_token.split('.')[1]));
            console.log(playload.identity.role);
            var role = playload.identity.role;
            // if((data).message === "You have successfully been logged in as admin"){
            //     location.href = "templates/admin/admin_home.html"
            // } else if((data).message === "You have successfully been logged in as " + username){
            //     location.href = "templates/user/user_home.html"
                
            // } else{
            //     var errmsg = (data).message;
            //     document.getElementById("err").innerHTML = errmsg;
            // }
            if(role == true){
                location.href = "templates/admin/admin_home.html"
            } else if(role == false){
                location.href = "templates/user/user_home.html"
            } else{
                var errmsg = (data).message;
                document.getElementById("err").innerHTML = errmsg;
            }
        })
        .catch(err => console.log(err))
}

function focusLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
}

function focusSignup(){
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}