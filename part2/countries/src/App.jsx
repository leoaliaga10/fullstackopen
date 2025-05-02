import { useState, useEffect } from "react";
import countrieService from "./services/countries";
import Information from "./components/Information";
import Filter from "./components/Filter";

const App = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState({});
  const [countries, setCountries] = useState(null);
  const [all, setAll] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);

  const allNames =
    Object.keys(all).length > 0 ? all.map((country) => country.name) : "";
  const resultadoFiltro = filtrarPorNombre(value);
  const numberResultFiltre = resultadoFiltro.length;

  //one countrie
  useEffect(() => {
    if (numberResultFiltre === 1 || selectedCountry) {
      const selected = selectedCountry
        ? selectedCountry
        : resultadoFiltro[0].common;
      setCountries(selected);

      countrieService.getOne({ countries: selected }).then((data) => {
        setNames(data);
      });
    }
  }, [resultadoFiltro]);

  //all countries
  useEffect(() => {
    countrieService.getAll().then((initialAllCountries) => {
      setAll(initialAllCountries);
    });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedCountry(null);
  };

  //Filtre
  function filtrarPorNombre(text) {
    const textoEnMinusculas = text.toLowerCase();
    return allNames
      ? allNames.filter((countrie) =>
          countrie.common.toLowerCase().includes(textoEnMinusculas)
        )
      : "";
  }
  const handleShow = (countryName) => {
    setCountries(countryName);
    setSelectedCountry(countryName);
  };

  return (
    <>
      <form>
        <div>
          find countries: <input value={value} onChange={handleChange} />
        </div>
      </form>
      <br></br>
      {numberResultFiltre === 1 || selectedCountry ? (
        <Information names={names} />
      ) : numberResultFiltre <= 10 ? (
        resultadoFiltro ? (
          resultadoFiltro.map((countrie) => (
            <Filter
              key={countrie.common}
              countrie={countrie.common}
              onShow={handleShow}
            />
          ))
        ) : (
          ""
        )
      ) : (
        "To many matches, specify another filter"
      )}
    </>
  );
};

export default App;
