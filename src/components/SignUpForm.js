import { useState } from "react";
import { signUp } from "../utilities/users-service";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // data send to back end to creat a new user
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      // return a token with the user info
      const user = await signUp(userData);
    } catch (error) {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>

      <p className="error-message">{formData.error}</p>
    </div>
  );
}
export default SignUpForm;
