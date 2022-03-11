import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div className="login_parent">
      {/* <div className="body_bottom"></div> */}
      <div className="row login_content">
        <div className="col-md-7">
          <form className="login_form">
            <h2>Login</h2>
            <hr />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="nhập mật khẩu tại đây"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="d-flex justify-content-left mt-3">
              <button>Login</button>
            </div>
            <hr />
            <p>
              Click <Link to="/register">here</Link> to Register
            </p>
          </form>
        </div>
        <div className="col-md-5">
          <lottie-player
            src="https://assets5.lottiefiles.com/private_files/lf30_ssbiwdab.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
