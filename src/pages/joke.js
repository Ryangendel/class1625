import { useState, useEffect } from "react";

function Joke(props) {
  return (
    <div className="App">
        welcome to your bank account valued customer: {props.user}
    </div>
  );
}

export default Joke;
