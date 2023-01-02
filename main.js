const op = document.getElementById('op');


//************************Login Box JavaScript And jQuery Start*****************

let email = document.getElementById("email")
let password = document.getElementById("password")
let flag = 1

function validate() {
    if (email.value == "") {
        document.getElementById("emailError").innerHTML = "Username is Empty"
        flag = 0
    } else if (email.value.length < 4) {
        document.getElementById("emailError").innerHTML = "Username must be more than 3 character"
        flag = 0
    } else {

        document.getElementById("emailError").innerHTML = ""
        flag = 1
    }

    if (password.value == "") {
        document.getElementById("passError").innerHTML = "Password is Empty"
        flag = 0
    } else {
        document.getElementById("passError").innerHTML = ""
    }

    if (flag) {
        return true
    } else {
        return false
    }
   
}

$("#close-btn").click(function(){
    $("#loginBox-div").hide(200)
})

//*********************Login Box JavaScript & jQuery End************************************ */