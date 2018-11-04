function focusLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
}

function focussignup(){
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}

function validate_login() { 
    var username = document.getElementById("uname").value; 
    var password = document.getElementById("password").value; 
    if(username == "user" && password == "user") { 
        document.getElementById("err").innerHTML = "";
        location.href = "templates/user/user_home.html"
        // alert("ok")
    } else if (username== "admin" && password == "root") {
        document.getElementById("err").innerHTML = "";
        location.href = "templates/admin/admin_home.html"
        // alert("ok")
    } else if (username !== "user" && password !== "user" || username !== "admin" && password !== "root") {
        document.getElementById("err").innerHTML = "Incorrect username or password";
    }
} 

function validate_signup(){
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if(password !== cpassword){
        document.getElementById("err").innerHTML = "The two passwords do not match";
    }
}

