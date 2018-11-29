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
                alert((data).message)
            }
        })
}

function validate_login() { 
    var username = document.getElementById("uname").value; 
    var password = document.getElementById("password").value; 
    if(username == "user" && password == "user") { 
        document.getElementById("err").innerHTML = "";
        location.href = "templates/user/user_home.html"
    } else if (username== "admin" && password == "root") {
        document.getElementById("err").innerHTML = "";
        location.href = "templates/admin/admin_home.html"
    } else if (username !== "user" && password !== "user" || username !== "admin" && password !== "root") {
        document.getElementById("err").innerHTML = "Incorrect username or password";
    }
} 

function focusLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
}

function focussignup(){
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}


