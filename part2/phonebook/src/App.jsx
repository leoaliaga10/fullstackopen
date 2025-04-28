import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    //..................
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
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const Persons = ({ names }) => {
    return <li>{names}</li>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((persona, index) => (
          <Persons key={index} names={persona.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
