import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Title = (props) => {
  return(
  <div className="title">
    <h1>{props.heading}</h1>
  </div>
  )
};
const SubTitle = (props) => {
  return(
  <div className="subtitle">
    <h4>{props.subtitle}</h4>
  </div>
  )
};

const Form = ({
  data: {text,
  },
}) => {

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
      <Title heading = {heading}/>
      <SubTitle subtitle = {subtitle}/>
      <Form data= {data}/>
    </div>
  </div>
  )
};
const rootElement = document.getElementById("root");

ReactDOM.render(<JsxElement/>, rootElement);
