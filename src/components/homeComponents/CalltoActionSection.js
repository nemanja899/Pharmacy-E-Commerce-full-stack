import React from "react";

const CalltoActionSection = ()=>{
    return(
        <div className="subscibe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subscibe-head">
                            <h2>Do you need more tips?</h2>
                            <p>Sign up for free and get the latest tips.</p>
                            <form className="form-section">
                                <input placeholder="Your email address" name="email" type="email"/>
                                <input value="Yes. I want!" name="subscribe" type="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CalltoActionSection;