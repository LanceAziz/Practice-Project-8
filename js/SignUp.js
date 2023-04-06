//Declerations:
var signUpName = document.getElementById('SignUpName');
var signUpEmail = document.getElementById('SignUpEmail');
var signUpPass = document.getElementById('SignUpPass');
var signUpBtn = document.getElementById('SignUpBtn');
var signUpError = document.getElementById('SignUpError');
var signUpNonExist = document.getElementById('SignUpNonExist');
var signUpSuccess = document.getElementById('SignUpSuccess');
//===============================================================
//Initializing dataConatiner Array
var dataContainer;
if (localStorage.getItem("Assignment_10") == null) {
    dataContainer = [];
}
else {
    dataContainer = JSON.parse(localStorage.getItem("Assignment_10"));
}
//===============================================================
//SignUp Click
signUpBtn.addEventListener('click', function () {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPass.value == '') {
        //All Inputs Are Required
        signUpError.classList.remove("d-none");
        signUpNonExist.classList.add("d-none");
        signUpSuccess.classList.add("d-none");
        clear();
    }
    else {
        var isExist = false;
        for (let i = 0; i < dataContainer.length; i++) {
            if (signUpEmail.value == JSON.parse(localStorage.getItem('Assignment_10'))[i].email) {
                isExist = true;
            }
        }
        if (isExist == true) {
            //Already Exist
            signUpError.classList.add("d-none")
            signUpNonExist.classList.remove("d-none");
            signUpSuccess.classList.add("d-none");
            clear();
        }
        else {
            //Success
            signUpError.classList.add("d-none");
            signUpNonExist.classList.add("d-none");
            signUpSuccess.classList.remove("d-none");
            addData();
            clear();
        }

    }
});
//===============================================================
//Other Functions
function addData() {
    var data = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPass.value
    };
    dataContainer.push(data);
    localStorage.setItem('Assignment_10', JSON.stringify(dataContainer));
}
function clear() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPass.value = "";
}
//===============================================================