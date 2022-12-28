import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😐": "Neutral Face",
  "🥺": "Pleading Face",
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "😆": "Grinning Squinting Face",
  "😉": "Winking Face"
};
var emojisweKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji yet!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={inputChangeHandler}></input>
      <h2>{meaning} </h2>
      <h3>Emojis we Know</h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
