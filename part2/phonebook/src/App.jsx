import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [textFind, setTextFind] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      phone: newPhone,
    };

    //.................. find
    let pivot = false;
    persons.forEach(function (elemento, indice) {
      const repetead = elemento.name === newName ? true : false;
      repetead ? (pivot = true) : "";
    });
    pivot
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));
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
        {resultadoFiltro.map((persona, index) => (
          <Persons key={index} names={persona.name} phones={persona.phone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
