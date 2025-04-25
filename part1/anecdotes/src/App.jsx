import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const getRandonInt = (max) => Math.floor(Math.random() * max);

  const anecdotes = [
    "1. If it hurts, do it more often.",
    "2. Adding manpower to a late software project makes it later!",
    "3. The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "4. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "5. Premature optimization is the root of all evil.",
    "6. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "7. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "8. The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  //---------------------------------------

  const handleClick = () => {
    let number_randon;
    number_randon = getRandonInt(anecdotes.length);
    setSelected(number_randon);
  };

  const handleVoteClick = () => {
    //console.log(votes);
    const copy = [...votes];
    copy[selected] += 1;
    console.log(copy);
    setVotes(copy);
  };

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
    </>
  );
};

export default App;
