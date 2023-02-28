import React from "react";

const Login = () => {
  return (
    <>
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", margin: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4 twxt-center">Sign in</h4>
          <form>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                required
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
