import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // const names = persons.map((persona) => persona.name);
  // console.log("Persons name map", names);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const Persons = ({ names }) => {
    return <li>{names}</li>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>debug: {newName}</div>
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
