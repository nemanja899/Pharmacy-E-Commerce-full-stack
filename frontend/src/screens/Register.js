import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { register } from "../Redux/Actions/UserActions";
import Message from "./../components/LoadingError/Error";
import Loading from "./../components/LoadingError/Loading";

const Register = () => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const dispach = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const redirect = location.pathname ? location.pathname.split("=")[1] : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
   
    if (userInfo) {
    if(!redirect){
       document.location.href ="/"
    }else{
      history(redirect);}
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispach(register(name, email, password));
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
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Username"
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPasssword(e.target.value);
            }}
            placeholder="Password"
          ></input>

          <button type="submit">Register</button>
          <p>
            <Link to={redirect? `/login?redirect=${redirect}`:"/login"}>
              I have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
