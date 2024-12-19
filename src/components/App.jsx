import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function nowTime() {
    alert(now + " Stoping Time is Stored In The Console Please Check ! ");
    console.log(now);
  }

  return (
    <div className="container">
      <p>Clock With React</p>
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
      <button onClick={nowTime}>Stoped Time Storage</button>
    </div>
  );
}

export default App;
