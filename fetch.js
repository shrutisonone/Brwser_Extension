// fetch.js
function fetchData() {
  const url = 'https://api.example.com/data'; // Replace with your target URL

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok (status ${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      // Process the fetched data here
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fetchData();