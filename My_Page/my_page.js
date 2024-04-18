{
    function listenerChangeRadioMyPage(event) {
        const companyNameContainer = document.getElementById("company_name_container_myPage");
        if (event.target.value === "individual") {
            companyNameContainer.style.display = "none";
        } else {
            companyNameContainer.style.display = "block";
        }
    }
}