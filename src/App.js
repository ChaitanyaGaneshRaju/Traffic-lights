import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Panel=styled.div`
background-color:black;
width:fit-content;
margin:10% 0% 0% 40%;
border-radius:1em;
padding:0.5em;
`

const Light = styled.div`
  width: 100px;
  height: 100px;
  margin:1em;
  border:none;
  border-radius:7em;
  opacity: 0.4;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
    -moz-box-shadow: 0px 0px 0px 0px #000;
    box-shadow: "";
  ${(props) =>
    props.red &&
    `
     background-color: red; 
 `};

  ${(props) =>
    props.yellow &&
    `
     background-color: yellow; 
 `};

  ${(props) =>
    props.green &&
    `
     background-color: rgb(4, 199, 4); 
 `};
`;
function App() {
  //colors [0-red,1-yellow,2-green]
  const colors=["red","yellow","green"];
  const [color, setColor] = useState(0);
  //time[3000-red,2000-yellow,1000-green]
  const time =[3000, 1000, 2000];

  useEffect(() => {
    //initially having the opacity one for all the lights...
    document.getElementById("traffic-lights").childNodes[
      color
    ].style.opacity = 1;

    document.getElementById("traffic-lights").childNodes[
      color
    ].style.boxShadow=`0px 0px 40px 10px ${colors[color]}`

    //upon the individual color turn changing the opacity of all as 0.4...
    const timeHandler = setInterval(() => {
      setColor((color + 1) % 3);
      document.getElementById("traffic-lights").childNodes[
        color
      ].style.opacity = 0.4;

    document.getElementById("traffic-lights").childNodes[
      color
    ].style.boxShadow=""

      
    }, time[color]);

    //clearing the interval and making the another light to blink...
    return () => clearInterval(timeHandler);
  });

  return (
    <Panel id="traffic-lights">
      <Light id="red" red />
      <Light id="yellow" yellow />
      <Light id="green" green />
    </Panel>
  );
}

export default App;
