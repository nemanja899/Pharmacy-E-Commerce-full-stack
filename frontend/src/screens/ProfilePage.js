import React, { useEffect } from "react";
import Header from "../components/Header";
import ProfileTabs from "../components/profileComponents/ProfileTables";
import Orders from "../components/profileComponents/Orders";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/UserActions";
import moment from "moment";
import { listMyOrders } from "../Redux/Actions/OrderActions";

const ProfilePage = () => {
  window.scrollTo(0, 0);

  const dispach = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading,error,orders } = orderListMy;

  useEffect(()=>{
    dispach(getUserDetails("profile"));
    dispach(listMyOrders());
  },[dispach]);

  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start d-flex justify-content-between">
          <div className="col-lg-4 p-0 shadow">
            <div className="author-card pb-0 pb-md-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img
                    src="https://th.bing.com/th/id/R.1f50774ba6657e78fb80b2268ebbffa7?rik=v%2fA1aFUv5qRwog&pid=ImgRaw&r=0"
                    alt="userprofileimage"
                  />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="author-card-name mb-2">
                    <strong>{userInfo.name}</strong>
                  </h5>
                  <span className="author-card-position">
                    <>Joined {moment(userInfo.createdAt).format('LL')}</>
                  </span>
                </div>
              </div>

              <div className="wizard pt-3">
                <div className="d-flex align-items-start">
                  <div
                    className="nav align-items-start flex-column col-12 nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Profile Settings
                    </button>
                    <button
                      className="nav-link d-flex justify-content-between"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Orders List
                      <span className="badge2">{orders? orders.length: 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane show active"
              id="v-pills-home"
              aria-labelledby="v-pills-home-tab"
              role="tabpanel"
            >
              <ProfileTabs />
            </div>
            <div
              className="tab-pane"
              id="v-pills-profile"
              aria-labelledby="v-pills-profile-tab"
              role="tabpanel"
            >
              <Orders orders={orders} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
