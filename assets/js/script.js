var password = document.getElementById('password');
password=genPassword();
function genPassword() {
  var chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passwordLength = 15;
  var password = '';
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.round(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById('password').value = password;
}
function copyPassword() {
  var copyText = document.getElementById('password');
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand('copy');
}