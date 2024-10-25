// content.js
chrome.storage.local.get('walletDetails', (result) => {
  if (result.walletDetails) {
    // Fill in the job application fields with the wallet details
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    // ...
    const passwordField = document.getElementById('password');

    nameField.value = result.walletDetails.name;
    emailField.value = result.walletDetails.email;
    passwordField.value = result.wallerDetails.password;
    // ...
  }
});