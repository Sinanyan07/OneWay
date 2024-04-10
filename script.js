function changeCode(code, Id) {
    document.getElementById(Id).innerText = code;
}


function for_see_password_type(id) {
    const passwordInput = document.getElementById(id);
    passwordInput.type === "password" ? passwordInput.type = 'text' : passwordInput.type = 'password';
}


{
    function listenerChangeRadio(event) {
        const companyNameContainer = document.getElementById("company_name_container");
        if (event.target.value === "individual") {
            companyNameContainer.style.display = "none";
        } else {
            companyNameContainer.style.display = "block";
        }
    }
}