function validate_signup(){
    var uname = document.getElementById("user_name").value;
    var email = document.getElementById("user_email").value;
    var password = document.getElementById("user_password").value;

    console.log(uname +"" + email + ""+ password);

    var formdata = {
        "user_name":uname, 
        "user_email":email, 
        "user_password":password
    }
        
    console.log(formdata)

    fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
        method: 'post',
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(formdata)
    })
        .then(response => response.json())
        .then((data) => {
            if((data).message === "User " + uname + " successfully created"){
                alert(uname + ' successfully registered. Login to proceed');
                focusLogin()
            }else{
                errmsg = (data).message
                document.getElementById("errs").innerHTML = errmsg;
            }
        })
}

function validate_login() { 
    var username = document.getElementById("user_name").value; 
    var password = document.getElementById("user_password").value; 
    var formdata = {
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
    })
        .then(response => response.json())
        .then((data) => {
            if((data).message === "You have successfully been logged in as admin"){
                location.href = "templates/admin/admin_home.html"
            } else if((data).message === "You have successfully been logged in as " + username){
                location.href = "templates/user/user_home.html"
            } else{
                errmsg = (data).message
                document.getElementById("err").innerHTML = errmsg;
            }
        })
} 

function focusLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
}

function focussignup(){
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}


