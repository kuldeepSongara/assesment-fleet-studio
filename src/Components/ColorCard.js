import React from "react";
import { getContrastColor } from "../utils";
import "./styles.css";

const ColorCard = ({ hex }) => {
  return (
    <div key={hex} className="colorCardStyle" style={{ backgroundColor: hex }}>
      <p
        style={{
          color: getContrastColor(hex),
        }}
      >
        {hex}
      </p>
    </div>
  );
};

export default ColorCard;
