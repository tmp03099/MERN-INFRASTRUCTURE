// * The users-service.js module will definitely need to make AJAX requests to the Express server.

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

const BASE_URL = "/api/users/login";
export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData), // makes the JS object to a string to be send over the internet
  });

  if (res.ok) {
    return res.json(); // JWT Token
  } else {
    throw new Error("Invalid Sign Up!");
  }
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
}
