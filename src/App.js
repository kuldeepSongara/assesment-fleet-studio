import { useState } from "react";
import ColorCard from "./Components/ColorCard";
import { colors } from "./Colors";
import "./App.css";

export default function App() {
  const [inputWord, setinputWord] = useState("");
  const [relatedColors, setRelatedColors] = useState([]);

  const handleInputChange = (event) => {
    setinputWord(event.target.value);
  };

  const handleSearch = () => {
    const colorName = inputWord.toLowerCase();
    const matchingColors = Object.keys(colors).filter((colorKey) => {
      return colorKey.toLocaleLowerCase().includes(colorName);
    });
    if (matchingColors.length > 0) {
      const foundMatchColors = matchingColors.map((color) => colors[color]);
      setRelatedColors(foundMatchColors);
    } else {
      alert("No match found");
      setRelatedColors([]);
    }
  };

  return (
    <div className="App">
      <h1>Type the word for Color Search</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={inputWord}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="colorCardWrapperStyle">
        {relatedColors.length > 0 &&
          relatedColors.map((color, index) => {
            return color !== null ? (
              <ColorCard key={color + index} hex={color} />
            ) : null;
          })}
      </div>
    </div>
  );
}
