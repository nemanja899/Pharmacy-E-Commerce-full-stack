import React from "react";

const ProfileTabs = () => {
  return (
    <>
      <form className="row form-container">
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">UserName</label>
            <input className="form-control" type="text" required />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">Email</label>
            <input type="email" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">New Password</label>
            <input type="password" className="form-control" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input type="password" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Update account</button>
      </form>
    </>
  );
};

export default ProfileTabs;