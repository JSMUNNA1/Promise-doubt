// Function to make an API call
function makeApiCall(url, callback) {
  const xhr = new XMLHttpRequest();

  // Open a GET request to the provided URL
  xhr.open("GET", url);

  // When the request is complete
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response and pass it to the callback
      callback(null, JSON.parse(xhr.responseText));
    } else {
      // If there's an error, pass the error message to the callback
      callback(`Error: ${xhr.status}`, null);
    }
  };

  // Handle network errors
  xhr.onerror = function () {
    callback("Network Error", null);
  };

  // Send the request
  xhr.send();
}

// Callback function to handle the API response
function handleApiResponse(error, data) {
  if (error) {
    console.error("API call failed:", error);
  } else {
    console.log("API call succeeded:", data);
  }
}

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
makeApiCall(apiUrl, handleApiResponse);
