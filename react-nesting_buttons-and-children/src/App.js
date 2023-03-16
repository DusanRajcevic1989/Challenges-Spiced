import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Dusan</Button>
      <Button>Gordana</Button>
      <Button>Anica</Button>
      <Button>Rajcevic</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
