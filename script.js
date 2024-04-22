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



    //header opening language
  // {
  //   const openDv = document.querySelector('.langDv');
  //   const dropLang = document.querySelector('.dropDownLang');
  //    const selDiv = document.getElementById('selDv');
  
  //   function openLang() {
  //     openDv.style.display = openDv.style.display === 'block' ? 'none' : 'block';
  //     dropLang.style.transform = dropLang.style.transform === 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
  //   }
  //   window.addEventListener("click", function (event) {
  //     if (!selDiv.contains(event.target) && openDv.style.display === "block") {
  //       openDv.style.display = "none";
  //       dropLang.style.transform = "rotate(0deg)";
  //     }
  //   })
  // }
  

  // {
  //   const openDv1 = document.querySelector('.langDv1');
  //   const dropLang1 = document.querySelector('.dropDownLangg');
  //    const selDiv1 = document.getElementById('selDv1');
  
  //   function openRent() {
  //     openDv1.style.display = openDv1.style.display === 'block' ? 'none' : 'block';
  //     dropLang1.style.transform = dropLang1.style.transform === 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
  //   }
  //   window.addEventListener("click", function (event) {
  //     if (!selDiv1.contains(event.target) && openDv1.style.display === "block") {
  //       openDv1.style.display = "none";
  //       dropLang1.style.transform = "rotate(0deg)";
  //     }
  //   })
  // }


  {// for menu bar Open-close

    function barX() {
      let menBar = document.querySelector(".forBar");
      let menX = document.querySelector(".forX");
      
      // Get the computed style
      let menBarDisplay = window.getComputedStyle(menBar).getPropertyValue('display');
    
      if (menBarDisplay === "block") {
        menBar.style.display = "none";
        menX.style.display = "block";
      } else {
        menBar.style.display = "block";
        menX.style.display = "none";
      }
    }
    
    }



  