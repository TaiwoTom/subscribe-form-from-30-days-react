import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import twitterLogo from "./images/twitterlogo.png"
import { authentication } from "./firebase-config.js"
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";


const Title = (props) => {
  return (
    <div className="title">
      <h1>{props.heading}</h1>
    </div>
  )
};
const SubTitle = (props) => {
  return (
    <div className="subtitle">
      <h4>{props.subtitle}</h4>
    </div>
  )
};

const Form = ({
  data: { text,
  },
}) => {

  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div>
      <form>
        <input
          type={text}
          className="firstname"
          name="firstname"
          placeholder="First name"
        ></input>
        <input
          type={text}
          className="lastname"
          name="lastname"
          placeholder="Last name"
        ></input>
        <input
          type={text}
          className="email"
          name="email"
          placeholder="Email"
        ></input>
        <div className="btn">
          <button type="button">Subscribe</button>
        </div>
        <div className="twitterIcon">
          <img src={twitterLogo} alt="twitter logo" onClick={signInWithTwitter}
            width="40"
            height="40" />
          <h3>Sign in with Twitter</h3>
        </div>
      </form>
    </div>
  )
};


const JsxElement = () => {
  const heading = "SUBSCRIBE";
  const subtitle = "Sign up with your email address to receive news and updates.";
  const data = {
    text: "text",
  }

  return (

    <div className="box1">
      <div className="box2">
        <Title heading={heading} />
        <SubTitle subtitle={subtitle} />
        <Form data={data} />
      </div>
    </div>
  )
};
const rootElement = document.getElementById("root");

ReactDOM.render(<JsxElement />, rootElement);
