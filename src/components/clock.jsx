/* eslint-disable no-undef */
import React, { useState } from "react";
import LoveIcon from '@material-ui/icons/Favorite';
import red from '@material-ui/core/colors/red';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const myAwesomeColor = red[500];

  return (
      <React.Fragment>

    <div className="container-fluid" style={{ textAlign: "center", color: "white", padding: "15%" }}>
      <h1 style={{ fontSize: "5em" }}>{time}</h1>
      <br />
    </div>



    <div style={{ color: "white", textAlign: "center" }}>
        <footer>Made with <LoveIcon style={{ color: myAwesomeColor, fontSize: '20' }} className="mb-2"/> by Iron Coder</footer>
    </div>

    </React.Fragment>
  );
}

export default App;