import React from "react";
import "./style.css";
import { useState } from "react";
const Game=()=> {
  const [count, setCount] = useState(0);
  var num = 0;
  for (var i = 1; i <= 9; i++) {
    var classes = `#{i}`.className;
    if (classes === "black") {
      num++;
    }
  }


  if (count === 0) {
    //   alert("you win");
  }
  function click1() {
    document.getElementById(1).classList.toggle("black");
    document.getElementById(2).classList.toggle("black");
    document.getElementById(4).classList.toggle("black");
    setCount(count+1);
   
  }
  function click2() {
    document.getElementById(2).classList.toggle("black");
    document.getElementById(1).classList.toggle("black");
    document.getElementById(3).classList.toggle("black");
    document.getElementById(5).classList.toggle("black");
    setCount(count+1);
   
  }
  function click3() {
    document.getElementById(3).classList.toggle("black");
    document.getElementById(2).classList.toggle("black");
    document.getElementById(6).classList.toggle("black");
    setCount(count+1);
   
  }
  function click4() {
    document.getElementById(1).classList.toggle("black");
    document.getElementById(4).classList.toggle("black");
    document.getElementById(5).classList.toggle("black");
    document.getElementById(7).classList.toggle("black");
    setCount(count+1);
   
  }
  function click5() {
    document.getElementById(2).classList.toggle("black");
    document.getElementById(4).classList.toggle("black");
    document.getElementById(6).classList.toggle("black");
    document.getElementById(5).classList.toggle("black");
    document.getElementById(8).classList.toggle("black");
    setCount(count+1);
   
  }
  function click6() {
    document.getElementById(3).classList.toggle("black");
    document.getElementById(5).classList.toggle("black");
    document.getElementById(9).classList.toggle("black");
    document.getElementById(6).classList.toggle("black");
    setCount(count+1);
   
  }
  function click7() {
    document.getElementById(7).classList.toggle("black");
    document.getElementById(4).classList.toggle("black");
    document.getElementById(8).classList.toggle("black");
    setCount(count+1);
   
  }
  function click8() {
    document.getElementById(8).classList.toggle("black");
    document.getElementById(7).classList.toggle("black");
    document.getElementById(5).classList.toggle("black");
    document.getElementById(9).classList.toggle("black");
    setCount(count+1);
   
  }
  function click9() {
    document.getElementById(9).classList.toggle("black");
    document.getElementById(6).classList.toggle("black");
    document.getElementById(8).classList.toggle("black");
    setCount(count+1);
   
  }

  return (
    <>
    <div>
      <table>
        <tr>
          <th>
            <tr>
              <td>
                <button className="black" id="1" onClick={click1}></button>
              </td>
              <td>
                <button id="2" onClick={click2}></button>
              </td>
              <td>
                <button className="black" id="3" onClick={click3}></button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="4" onClick={click4}></button>
              </td>
              <td>
                <button className="black" id="5" onClick={click5}></button>
              </td>
              <td>
                <button id="6" onClick={click6}></button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="black" id="7" onClick={click7}></button>
              </td>
              <td>
                <button id="8" onClick={click8}></button>
              </td>
              <td>
                <button className="black" id="9" onClick={click9}></button>
              </td>
            </tr>
          </th>
        </tr>
      </table>
      </div>
    </>
  );
}

export default Game;
