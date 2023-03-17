import "./styles.css";
import React, { useState } from "react";

export default function App() {
  isActive = false;

  function handleClick() {
    const [isActive, setIsActive] = setState(false);
    setIsActive(isActive);
    // 'isActive = !isActive;'
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
