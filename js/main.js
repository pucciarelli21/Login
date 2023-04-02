const user = document.getElementById("user")
const password = document.getElementById("pass")
const form = document.querySelector('.needs-validation')

function validacion() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(regexEmail.test(user.value) == "" && password.value == "") {
        console.log("false") 
    }
}

document.getElementById("button-confirm").addEventListener("click", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        validacion();  
    }else{
        window.location = "page2.html"
    }
    form.classList.add('was-validated')
})
