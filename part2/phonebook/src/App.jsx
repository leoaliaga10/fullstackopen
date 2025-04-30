import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [textFind, setTextFind] = useState("");

  //........... persons of server

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  //...........................

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    //.................. find
    let pivot = false;
    persons.forEach(function (elemento, indice) {
      const repetead = elemento.name === newName ? true : false;
      repetead ? (pivot = true) : "";
    });
    pivot
      ? alert(`${newName} is already added to phonebook`)
      : personsService.create(nameObject).then((returnedName) => {
          setPersons(persons.concat(returnedName));
          setNewName("");
        }); //setPersons(persons.concat(nameObject));
    //...................
    // setPersons(persons.concat(nameObject));
    setNewName("");
    setNewPhone("");
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };
  //...................... filtre
  function filtrarPorNombre(text) {
    const textoEnMinusculas = text.toLowerCase();
    return persons.filter((person) =>
      person.name.toLowerCase().includes(textoEnMinusculas)
    );
  }
  const resultadoFiltro = filtrarPorNombre(textFind);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter textFind={textFind} setTextFind={setTextFind} />
      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <ul>
        {resultadoFiltro.map((persona) => (
          <Persons
            key={persona.id}
            names={persona.name}
            phones={persona.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
