let email = document.getElementById("email");
let error = document.getElementById("error");
let password = document.getElementById("password");

function validate1() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value)) {
        return true;
    }
    else {
        return false;
    }
}

function validate2() {
    if (password.value.length <= 8 || password.value.search(/[A-Z]+/) == -1 || password.value.search(/[a-z]+/) == -1 || password.value.search(/[0-9]+/) == -1) {
        alert("Password should contain minimum 8 characters, atleast one uppercase, and one lowercase, must contain atleast one number");
        return false;
    }
}


function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{4,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = ' : Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = ' : More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green"> Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange"> Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red"> Weak!</span>';
    }
}
