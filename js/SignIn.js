//Declerations:
var signInEmail = document.getElementById('SignInEmail');
var signInPass = document.getElementById('SignInPass');
var signInBtn = document.getElementById('SignInBtn');
var signInError = document.getElementById('SignInError');
var signInInvalid = document.getElementById('SignInInvalid');
//===============================================================
//Checking The Data
var temp;
var dataContainer = JSON.parse(localStorage.getItem('Assignment_10'));
signInBtn.addEventListener('click', function () {
    if (signInEmail.value == '' || signInPass.value == '') {
        //All Inputs Are Required
        signInError.classList.remove("d-none");
        signInInvalid.classList.add("d-none");
        clear();
    }
    else {
        var isExist = false;
        for (let i = 0; i < dataContainer.length; i++) {
            if (signInEmail.value == JSON.parse(localStorage.getItem('Assignment_10'))[i].email && signInPass.value == JSON.parse(localStorage.getItem('Assignment_10'))[i].password) {
                isExist = true;
                temp = JSON.parse(localStorage.getItem('Assignment_10'))[i];
                sessionStorage.setItem('currentUser',JSON.stringify(temp));
            }
        }
        if (isExist == true) {
            //Enter Account
            window.location.href='Dashbord.html';
        }
        else {
            //Invalid
            signInError.classList.add("d-none");
            signInInvalid.classList.remove("d-none")
            clear();
        }

    }
});
//===============================================================
//Other Functions
function clear() {
    signInEmail.value = "";
    signInPass.value = "";
}