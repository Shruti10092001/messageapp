import "../App.scss";
import React from "react";
const Registration = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">ChatApp</span>
          <span className="title">Register</span>
          <from className='from'>
            <input className="input" type="text" placeholder="Full Name"/>
            <input className="input" type="email" placeholder="Email"/>
            <input className="input" type="Password" placeholder="Create Password"/>
            {/* <input className="input" type="file" id="file" placeholder="File"/> */}
            <label className="label" htmlFor='file'>
                <img className="img" src='https://banner2.cleanpng.com/20180616/ixk/kisspng-slide-show-presentation-slide-computer-icons-rever-gallery-icon-5b259eca8f5610.0430051115291921385871.jpg' alt='' />
                <h3>Add an avtar</h3> </label>
            <button className="button">Sign up</button>
          </from>
          <p>Do you have an account? Log in</p>
        </div>
      </div>
    </>
  );
};

export default Registration;
