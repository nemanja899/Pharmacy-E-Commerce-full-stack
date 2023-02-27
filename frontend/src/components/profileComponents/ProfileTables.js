import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Actions/UserActions";

const ProfileTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading:updateLoading } = userUpdateProfile;

  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Passwords do not match", Toastobjects);
      }
    } else {
      dispatch(updateUserProfile({id:user._id,name,email,password}));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Profile is updated", Toastobjects);
      }
    }
  };

  return (
    <>
      <Toast></Toast>
      {error && <Message variant={"alert-danger"}>{error}</Message>}
      {loading && <Loading></Loading>}
      {updateLoading && <Loading></Loading>}
      <form className="row form-container" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-fn">UserName</label>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-email">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-pass">New Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-confirm-pass">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update account
        </button>
      </form>
    </>
  );
};

export default ProfileTabs;
