function changeCode(code) {
    document.getElementById('dropdownMenuButton').innerText = code;
}


function for_see_password_type(id) {
    const passwordInput = document.getElementById(id);
    passwordInput.type === "password" ? passwordInput.type = 'text' : passwordInput.type = 'password';
}