import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");

  const handleupclick = () => { 
    console.log("up button was clicked");
    let newtext = Text.toUpperCase();
    setText(newtext);
  };
  const handleupclicklower = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
  };
  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  return (
    <>
      <h3>{props.heading} </h3>
      <div className="mb-3">
      <div className="container" >
          <h3>Input</h3>
        </div>
        <textarea
          className="form-control"
          placeholder="Enter your text here"
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <div>
          <h3>Output</h3>
        </div>
        <textarea
          className="form-control"
          placeholder="Output"
          onChange={handleonchange}
          value={Text}
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <button onClick={handleupclick} className="btn btn-primary m-1  ">
          Convert to Uppercase{" "}
        </button>

        <button onClick={handleupclicklower} className="btn btn-primary ">
          Convert to Lowercase{" "}
        </button>
      </div>
      <div className="container m-2 "  >
        <h3>Your text summary</h3>
        <p>words {Text.split(" ").length} , {Text.length} characters and {0.008 * Text.split(" ").length } minutes read </p>
        {/* <p>{0.008 * Text.split(" ").length } minutes read</p> */}
      </div>
    </>
  );
}
