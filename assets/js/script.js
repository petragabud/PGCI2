console.log("label for action to check, varTo Check");
let password = document.getElementById("genBn");
password.addEventListener("click", genPassword);
password = genPassword();


function genPassword ()
{
  console.log("genPassword func reached");
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 16;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.round(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("passResult").value = password;
}

 // timeout before a callback is called

    let timeout;

 // Adding an click event listener when a user cliks Check Button 
 let strengthBadge = document.getElementById('StrengthDisp');
strengthBadge.addEventListener("click", strengthChecker);
strengthBadge = strengthChecker();



function strengthChecker(PasswordParameter) {
  console.log("strengthChecker(PasswordParameter) func reached");



  // The strong and weak password Regex pattern checker

  let strongPassword = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  console.log("strongPassword", strongPassword);
  let mediumPassword = new RegExp ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  console.log("mediumPassword", mediumPassword);

    // We then change the badge's color and text based on the password strength

    if (strongPassword.test(PasswordParameter)) {
      console.log("PasswordParameter", PasswordParameter);
      strengthBadge.style.backgroundColor = "green";
    } else if (mediumPassword.test(PasswordParameter)) {
      console.log("Else if PasswordParameter", PasswordParameter);
      strengthBadge.password = 'blue';
      strengthBadge.style.display = 'block';
    } else {
      console.log("Else PasswordParameter", PasswordParameter);
      strengthBadge.password = 'red';
      strengthBadge.textContent = 'Weak';
    }
    document.getElementById("strenghtChecker").value = PasswordParameter;
  }
  
   //The badge is hidden by default, so we show it

        strengthBadge.style.display= 'block';
        clearTimeout(timeout);
        
            //We then call the StrengChecker function as a callback then pass the typed password to it
  timeout = setTimeout(() => strengthChecker(password.value), 500);
