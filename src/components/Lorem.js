import React from "react";
import "./Lorem.css";

const Lorem = () => {
  return (
    <div className="container">
      <h4>Lorem Maker</h4>
      <form>
        <label>Number of Paragraphs:</label>
        <input type='number'/>
        <button type="submit">Make</button>
      </form>
      <p>first paragraph</p>
    </div>
  );
};

export default Lorem;
