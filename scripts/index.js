function focusLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
}

function focussignup(){
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}

// function currentUser(){
//     var currentUser = document.getElementById("uname").value;
//     var user = document.getElementById("user");
//     user.value = currentUser;
// }

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

function validate_signup(){
    var re = /[A-Za-z]/;
    var fname = document.getElementById("fname").value;
    if(!fname.match(re)){
        document.getElementById("err").innerHTML = "First name must be letters";
    }
    
    var lname = document.getElementById("lname").value;
    if(!lname.test(re)){
        document.getElementById("err").innerHTML = "Last name must be letters";
    }

    var re = /\S+@\S+\.\S+/;
    var email = document.getElementById("email").value;
    if(!email.test(re)){
        document.getElementById("err").innerHTML = "Please write a valid email address name@mail.domainname";
    }

    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if(password !== cpassword){
        document.getElementById("err").innerHTML = "The two passwords do not match";
    }
}

