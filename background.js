chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
});

// Open login page to authenticate and fetch token
function loginToTruScholar() {
  const loginURL = "https://app.truscholar.io/oauth2/authorize";  // Adjust login URL if needed
  chrome.identity.launchWebAuthFlow({
    url: loginURL,
    interactive: true
  }, (redirectUrl) => {
    if (chrome.runtime.lastError || !redirectUrl) {
      console.error(chrome.runtime.lastError);
      return;
    }
    const token = extractTokenFromUrl(redirectUrl);
    if (token) {
      chrome.storage.local.set({ truScholarToken: token }, () => {
        console.log("Token saved.");
        fetchAccountDetails(token);
      });
    }
  });
}

// Function to extract token from redirect URL
function extractTokenFromUrl(url) {
  const urlParams = new URLSearchParams(new URL(url).hash.substring(1));
  return urlParams.get('access_token');  // Modify based on actual parameter
}

// Fetch user details using the token
function fetchAccountDetails(token) {
  fetch('https://api.truscholar.com/account/details', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("Account details:", data);
      chrome.storage.local.set({ userDetails: data });
    })
    .catch(error => console.error("Error fetching account details:", error));
}

chrome.action.onClicked.addListener(() => {
  loginToTruScholar();
});
