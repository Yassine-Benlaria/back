import React, { useState } from "react";
import HomeClient from "../client/home";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleClick() {
    if (email == "admin" && password == "admin") {
      history.push("/home");
    }
  }
  //   // console.log("email " + email);
  //   // console.log("pass " + password);

  return (
    <div className="App">
      <div className="container p-5">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLabel">
                Login
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <a
                  type="submit"
                  className="btn  btn-primary action-button"
                  onClick={() => handleClick()}
                >
                  Login
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
