import React, { useState, useEffect, useContext } from "react";
import { useParams }from "react-router-dom"
import {AppContext} from "../App"

function Joke(props) {
  const { jokeid } = useParams();
  const ctx = useContext(AppContext)
  console.log("##########---CTX IS BELOW")
  console.log(jokeid)
  console.log(ctx)
  console.log("##########---CTX IS ABOVE")

  return (
    <div className="App">
        welcome to your bank account valued customer: {props.user} 
        and the joke of the day is : {ctx.joke} 
    </div>
  );
}

export default Joke;
