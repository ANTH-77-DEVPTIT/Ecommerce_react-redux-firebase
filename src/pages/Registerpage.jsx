import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const Registerpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = getAuth();

    const register = async () => {
        //người dùng thao tác với form đăng ký, validate xong thì
        try {
            setLoading(true);
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(result);

            setLoading(false);
            toast.success("🦄 Wow so easy!");
            //
        } catch (error) {
            console.log(error);
            toast.error("Registration failed");
            setLoading(false);
        }
    };

    return (
        <div className="register_parent">
            {loading && <Loading />}
            {/* <div className="body_top"></div> */}
            <div className="row register_content">
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
                    <form className="register_form">
                        <h2>Register</h2>
                        <hr />
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="text"
                                value={email}
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
                                value={password}
                                className="form-control"
                                id="password"
                                placeholder="nhập mật khẩu tại đây"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={cPassword}
                                className="form-control"
                                id="cpassword"
                                placeholder="xác nhận mật khẩu tại đây"
                                onChange={(e) => {
                                    setCPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div className="d-flex justify-content-left mt-3">
                            <button onClick={register}>REGISTER</button>
                        </div>
                        <hr />
                        <p>
                            Already registered. Click{" "}
                            <Link to="/login">here</Link> to Login
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registerpage;
