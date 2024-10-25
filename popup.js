document.getElementById('login').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "login" }, response => {
    document.getElementById('status').textContent = "Fetching account details...";
  });
});

//// popup.js
//document.getElementById('fetchDetails').addEventListener('click', () => {
//  const walletUrl = document.getElementById('walletUrl').value;
//  const username = document.getElementById('username').value;
//  const password = document.getElementById('password').value;

//  chrome.runtime.sendMessage({
//    action: 'fetchWalletDetails',
//    walletUrl,
//    username,
//    password
//  });
//});