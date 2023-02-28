import React from "react";
import { ToastContainer } from "react-toastify";

const Toast= () =>{
    return (
        <div>
            <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            >

            </ToastContainer>
        </div>
    );
};

export default Toast;