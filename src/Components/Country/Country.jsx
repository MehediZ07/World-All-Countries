import React, { useState } from "react";
import "./Country.css";
export default function Country({ country, sendHandleFunc }) {
  const [value, setValue] = useState(false);
  function values() {
    console.log("clicked");
    setValue(true);
  }

  const buttonStyle = {
    backgroundColor: value ? "red" : "green",
    fontWeight: value ? "700" : "400",
  };
  return (
    <div className="">
      <div className="container">
        <img src={country.flags.png} alt={country.name.common} />
        <p>{country.name.common}</p>
        <button
          style={buttonStyle}
          disabled={value}
          onClick={() => {
            sendHandleFunc(country);
            values();
          }}
        >
          {value ? "Visited" : "Visit country"}
        </button>
      </div>
    </div>
  );
}
