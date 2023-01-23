import React from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';

const Register=()=>{
    window.scrollTo(0,0);

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="Login col-md-8 col-lg-4 col-11">
                    <input type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>

                    <button type="submit">Register</button>
                    <p>
                        <Link to={"/login"}>
                            I have Account <strong>Login</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};


export default Register;