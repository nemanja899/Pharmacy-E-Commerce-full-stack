import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/UserActions";
import Message from "./../components/LoadingError/Error";
import Loading from "./../components/LoadingError/Loading";

const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const dispach = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const redirect = (location.state && location.state.redirect) ? location.state.redirect : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
   
    if (userInfo) {
      history(`/${redirect}`);
    }
  }, [history, redirect,location,userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispach(login(email, password));
    history(redirect);
  };
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading></Loading>}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPasssword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
