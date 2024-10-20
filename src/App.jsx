import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
function App() {
  const [count, setCount] = useState([]);
  const countriesToRemove = ["Israel", "India"];
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const filteredCountries = data.filter(
          (country) => !countriesToRemove.includes(country.name.common)
        );
        setCount(filteredCountries);
      });
  }, []);

  const [dataFromChild, setDataFromChild] = useState([]);

  const handleCountry = (data) => {
    if (
      !dataFromChild.some((country) => country.name.common === data.name.common)
    ) {
      setDataFromChild((prevData) => [...prevData, data]);
    }
  };

  return (
    <div>
      <h1>World all country</h1>
      <div>
        <h3>My visited Countries</h3>
        <div className="visited-countries-div">
          {dataFromChild.map((country, id) => (
            <div className="visited-country">
              <p key={id}>{country.name.common}</p>
              <img src={country.flags.png} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Countries
        sendHandleFunc={handleCountry}
        sendDataToCountries={count}
      ></Countries>
    </div>
  );
}

export default App;
