import { useState } from "react";

const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

const Par = ({ total, text }) => {
  return (
    <>
      <p>
        {text} {total}
      </p>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    // setTotal(updatedLeft + right);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    // setTotal(updatedNeutral + left);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <>
      <Title text="give feedbak" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Title text="statistics" />
      <Par text="good" total={good} />
      <Par text="neutral" total={neutral} />
      <Par text="bad" total={bad} />
    </>
  );
};

export default App;
