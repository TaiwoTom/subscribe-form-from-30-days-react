import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const heading = "SUBSCRIBE";
const subtitle = "Sign up with your email address to receive news and updates.";

const Title = () => (
  <div className="title">
    <h1>{heading}</h1>
  </div>
);
const SubTitle = () => (
  <div className="subtitle">
    <h4>{subtitle}</h4>
  </div>
);

const Form = () => (
  <div>
    <form>
      <input
        type="text"
        className="firstname"
        name="firstname"
        placeholder="First name"
      ></input>
      <input
        type="text"
        className="lastname"
        name="lastname"
        placeholder="Last name"
      ></input>
      <input
        type="text"
        className="email"
        name="email"
        placeholder="Email"
      ></input>
      <div className="btn">
        <button type="button">Subscribe</button>
      </div>
    </form>
  </div>
);

const JsxElement = (
  <div className="box1">
    <div className="box2">
      <Title/>
      <SubTitle/>
      <Form/>
    </div>
  </div>
);
const rootElement = document.getElementById("root");

ReactDOM.render(JsxElement, rootElement);
