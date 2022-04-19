console.log("label for action to check, varTo Check")
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
  document.getElementById("resultText").value = password;
}


let check = document.getElementById("check");
check.addEventListener("click", strengthChecker);
check = strengthChecker();



function strengthChecker(PasswordParameter) {
  console.log("strengthChecker(PasswordParameter) func reached");



  // The strong and weak password Regex pattern checker

let strongPassword = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
let mediumPassword = new RegExp ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


    // We then change the badge's color and text based on the password strength

    if (strongPassword.test(PasswordParameter)) {
      strengthChecker.style.backgroundColor = "green";
    } else if (mediumPassword.test(PasswordParameter)) {
      strengthChecker.placeholder = 'blue';
      strengthChecker.style.display = 'block';
    } else {
      strengthChecker.placeholder = 'red';
      strengthChecker.textContent = 'Weak';
    }
    document.getElementById("check").value = PasswordParameter;
  }