import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      Something
      <h2 className="artilce_title">This is not a test!</h2>
      <label htmlFor="Wikipedia">Wikipedia text</label>
      <input id="Wikipedia"></input>
      <a className="article-link" href="https://www.wikipedia.org/">
        Etvas anderes
      </a>
    </article>
  );
}
