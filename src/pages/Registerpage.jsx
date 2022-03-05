import React from "react";
import { useState } from "react";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div className="register_parent">
      <div className="body_top"></div>
      <div className="container register_content">
        <div className="row ">
          <div className="col-md-5">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_yr6zz3wv.json"
              background="#0000000"
              speed="1"
              loop
              autoplay
              className="lottie_player"
            ></lottie-player>
          </div>
          <div className="col-md-7">
            <form className="register_form z1">
              <h2>Register</h2>
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
                  onChange={(e) => {setEmail(e.target.value)}}
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
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  placeholder="xác nhận mật khẩu tại đây"
                  onChange={(e) => {setCPassword(e.target.value)}}
                />
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button>REGISTER</button>
              </div>
              <hr />
              <p>Already registered. Click here to login</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
