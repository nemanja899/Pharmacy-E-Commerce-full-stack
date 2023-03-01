import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/UserActions";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const dispach = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
   
    if (userInfo) {
      history(`/`);
    }
  }, [history,userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispach(login(email, password));
  };
  return (
    <>
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", margin: "100px" }}
      >
        <div className="card-body">
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading/>}
          <h4 className="card-title mb-4 twxt-center">Sign in</h4>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}

              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                required
                onChange={(e)=>setPasssword(e.target.value)}

              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
