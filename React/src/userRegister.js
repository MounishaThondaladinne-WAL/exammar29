import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  const registerUser = (event) => {
    event.preventDefault();
    const userObject = {
      username: event.target.username.value,
      password: event.target.password.value,
      date_of_creation: event.target.date_of_creation.value,
    };
    axios
      .post("/userlogin", userObject)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
        if (!details.status) {
          setError(details.data);
        } else {
          setError("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <form
        onSubmit={registerUser}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1>Registration</h1>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <input
            type="date"
            name="date_of_creation"
            placeholder="Enter Date of Creatio"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <button className="btn btn-primary">Register</button>
          <p className="text-danger">{error}</p>
        </div>
      </form>
    </div>
  );
};
export default Register;
