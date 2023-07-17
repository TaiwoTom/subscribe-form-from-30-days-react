import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import twitterLogo from "./images/twitterlogo.png";
import { authentication } from "./firebase-config.js";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const Title = (props) => {
  return (
    <div className="title">
      <h1>{props.heading}</h1>
    </div>
  );
};
const SubTitle = (props) => {
  return (
    <div className="subtitle">
      <h4>{props.subtitle}</h4>
    </div>
  );
};

const Form = ({ data: { text } }) => {
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //

  // const [inputs setInputs] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  // });
  // const {firstname, lastname, email} = inputs;

  const [inputs, setInputs] = useState("");
  const [subpopup, setSubPopUp] = useState("");

  const handleChange = (e) => {
    //or setInputs({...inputs, [e.target.name]: e.target.value})
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbyE-xP1Il0NBOCPUZeMq6LFBrqHQmMLcCjaKScS_4KfgQOodTUW1O_i0_y0NJsX_9Qr/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log(
      `${inputs.firstname} ${inputs.lastname} have successfully subscribed to Taiwo's tutorials!`
    );
    setSubPopUp(subpopup === "" ? [popUpSuccess] : "");
  };

  let popUpSuccess = (
    <>
      <div className="container">
        <div className="popupsuccess_wrap">
          <div class="popupsuccess">
            <h5>You are welcome</h5>
            <h4>
              ${inputs.firstname} ${inputs.lastname} have successfully
              subscribed to Taiwo's tutorials!
            </h4>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="form-container">
      <form className="form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="firstname"
          name="firstname"
          value={inputs.firstname}
          id="firstname" //value = {firstname} onChange={handleChange}
          placeholder="First name"
          onChange={(e) => handleChange(e)}
          required
        />

        <input
          type={text}
          className="lastname"
          name="lastname"
          value={inputs.lastname}
          id="lastname"
          placeholder="Last name"
          onChange={(e) => handleChange(e)}
          required
        ></input>

        <input
          type="{text}"
          className="email"
          name="email"
          value={inputs.email}
          id="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          required
        ></input>

        {/* <div className="input-group">
          <input 
          type="password"
           className="password" 
           name="password" 
           value={inputs.password} id="password" 
           placeholder="Password" onChange={(e) => handleChange(e)} required></input> 
            </div> */}

        <div className="btn">
          <button type="submit/button">Subscribe</button>
        </div>
        <div className="twitterIcon">
          <img
            src={twitterLogo}
            alt="twitter logo"
            onClick={signInWithTwitter}
            width="40"
            height="40"
          />
          <h3>Twitter</h3>
        </div>
      </form>
    </div>
  );
};

const JsxElement = () => {
  const heading = "SUBSCRIBE";
  const subtitle =
    "Sign up with your email address or twitter account to receive updates on my tutorials.";
  const data = {
    text: "text",
  };

  return (
    <div className="box1">
      <div className="box2">
        <Title heading={heading} />
        <SubTitle subtitle={subtitle} />
        <Form data={data} />
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");

ReactDOM.render(<JsxElement />, rootElement);
