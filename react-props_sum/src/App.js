import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={100} valueB={200} />;
}
function Sum({ valueA, valueB }) {
  let sum = valueA + valueB;
  return (
    <h2>
      {valueA} + {valueB} = {sum}
    </h2>
  );
}
