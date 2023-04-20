// We will use
// * SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

// * handleSubmit <--> [signUp]-users-service.js <--> [signUp]-users-api.js <-Internet-> server.js (Express)

import * as usersAPI from "./users-api";
export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  //console.log('[Form sign up function]', userData)
  const token = await usersAPI.signUp(userData);
  return token;
}
