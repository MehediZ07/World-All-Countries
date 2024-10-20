import React from "react";
import Country from "../Country/Country";
import "./Countries.css";
export default function Countries({ sendDataToCountries, sendHandleFunc }) {
  return (
    <div>
      <h1>Countries</h1>
      <div className="grid-container">
        {sendDataToCountries.map((country, id) => (
          <Country key={id} country={country} sendHandleFunc={sendHandleFunc} />
        ))}
      </div>
    </div>
  );
}
