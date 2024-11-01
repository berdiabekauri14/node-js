import { useState } from "react";
import React from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const btn = document.getElementById("add");
  const btn2 = document.getElementById("subtract");
  const btn3 = document.getElementById("restart");

  const add = () => setCount(count + 1);
  
  btn.onclick = add;

  const subtract = () => setCount(count - 1);

  btn2.onclick = subtract;

  const restart = () => setCount(0);

  btn3.onclick = restart;

  return (
    <>
      <header>
        <a href="https://nodejs.org/en"><img src="./src/assets/node js.png" alt="node.js logo" id="logo" /></a>
        <h1>Welcome to my first node.js project!</h1>
      </header>
      <br />
      <main>
        <h1 id="counter">{count}</h1>
        <button id="add">Add</button>
        <button id="restart">Restart</button>
        <button id="subtract">Subtract</button>
      </main>
      <br />
      <footer>
        <p>Project Author: <i>Berdia Bekauri</i></p>
        <p className="read-the-docs">Click on the node.js icon to view more information</p>
      </footer>
    </>
  )
}

export default App;