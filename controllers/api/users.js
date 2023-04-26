//* Request handler Logic
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//* /*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

async function create(req, res) {
  // console.log('[From POST handler]', req.body)
  try {
    //* creating a new user
    const user = await User.create(req.body);
    console.log(user);

    //* creating a new jwt
    const token = createJWT(user);

    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    //find the user by email
    const user = await User.findOne({ email: req.body.email });
    //check if found an user
    if (!user) {
      throw Error("User not found!");
    }

    //if the user exist: compare the password
    const match = await bcrypt.compare(req.body.password, user.password);
    //check if password matched
    if (!match) {
      throw Error("Password not match!");
    }

    //if password is a match create a token
    const token = createJWT(user);
    //send back a new token with user data in the payload
    res.json(token);
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken,
};
