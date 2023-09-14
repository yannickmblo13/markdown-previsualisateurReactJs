import React, { useState } from "react";
import Marked from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState("# Exemple de titre, désolé ce Prévisualisateur n'est pas stylé ");

  const changeInputHandler = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const markdownToHTML = () => {
    return { __html: Marked(text) };
  };

  return (
    <div className="root">
      <div className="areaDiv">
        <textarea
          rows="32"
          cols="60"
          value={text}
          onChange={(e) => changeInputHandler(e)}
        />
      </div>
      <div dangerouslySetInnerHTML={markdownToHTML()}></div>
    </div>
  );
}

export default App;
