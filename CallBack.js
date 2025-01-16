// Simulate fetching user data with a callback
function fetchUserData(userId, callback) {
  console.log("Fetching user data...");

  // Simulating a delay (asynchronous operation)
  setTimeout(() => {
    const data = {
      id: userId,
      name: "Munna Thakur",
      role: "Frontend Developer",
    };

    // Simulating success or failure
    const error = Math.random() > 0.8 ? "Failed to fetch user data" : null;

    // Call the callback with error or data
    handleUserData(error, data);
  }, 2000);
}

// Callback function to handle the response
function handleUserData(error, userData) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("User Data Received:", userData);
  }
}

// Usage
fetchUserData(101, handleUserData);
