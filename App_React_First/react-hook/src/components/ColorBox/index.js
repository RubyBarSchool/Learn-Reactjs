import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("deeppink");
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      COLOR BOX
    </div>
  );
}

export default ColorBox;
