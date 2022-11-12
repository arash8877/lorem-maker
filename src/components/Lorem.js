import React, { useState } from "react";
import "./Lorem.css";
import data from "./data";

const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleChange = (event) => {
    setCount(event.target.value);
     console.log(count)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt (count)

    if(count <= 0) {amount = 0};
    if(count > 4) {amount = 4}
    
    setText(data.slice(0,amount))
  };
       
  return (
    <div className="container">
      <h4>Lorem Maker</h4>
      <form onSubmit={handleSubmit}>
        <label>Number of Paragraphs:</label>
        <input 
        type="number" 
        onChange={handleChange}
        value={count} />
        <button type="submit">Make</button>
      </form>
      <article>
        {text.map((item) => {return <p>{item.description}</p>}) }
      </article>
    </div>
  );
};

export default Lorem;
