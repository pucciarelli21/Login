const user = document.getElementById("email")
const password = document.getElementById("pass")
const form = document.querySelector('.needs-validation')

function validacion() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (regexEmail.test(user.value) == "" && password.value == "") {
        console.log("false")
    }
}

function showPassword() {
    var htmlType = document.getElementById("pass");
    var buttonShowPasword = document.getElementById("btn-password")
    if (htmlType.type == "password") {
        htmlType.type = "text";
        buttonShowPasword.classList.add('btn-secondary');
        buttonShowPasword.classList.remove('btn-primary');
    } else {
        htmlType.type = "password";
        buttonShowPasword.classList.add('btn-primary');
        buttonShowPasword.classList.remove('btn-secondary');
    }
}


document.getElementById("button-confirm").addEventListener("click", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        validacion();
    } else {
        window.location = "page2.html"
    }
    form.classList.add('was-validated')
})