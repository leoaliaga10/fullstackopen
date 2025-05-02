import { useState, useEffect } from "react";
import countrieService from "./services/countries";
import Information from "./components/Information";
import Filter from "./components/Filter";

const App = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState({});
  const [countries, setCountries] = useState(null);
  const [all, setAll] = useState({});

  const allNames =
    Object.keys(all).length > 0 ? all.map((country) => country.name) : "";
  const resultadoFiltro = filtrarPorNombre(value);
  const numberResultFiltre = resultadoFiltro.length;

  //one countrie
  useEffect(() => {
    if (resultadoFiltro.length === 1) {
      const selected = resultadoFiltro[0];
      setCountries(selected.common);

      countrieService.getOne({ countries: selected.common }).then((data) => {
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

  return (
    <>
      <form>
        <div>
          find countries: <input value={value} onChange={handleChange} />
        </div>
      </form>
      <br></br>
      {numberResultFiltre === 1 ? (
        <Information names={names} />
      ) : numberResultFiltre <= 10 ? (
        resultadoFiltro ? (
          resultadoFiltro.map((countrie) => (
            <Filter key={countrie.common} countrie={countrie.common} />
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
