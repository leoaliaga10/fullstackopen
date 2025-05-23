import { useState } from "react";

const Statistics = (props) => {
  const StatisticLine = ({ text, value }) => {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </>
    );
  };
  if (props.sum === 0 && props.avg === 0 && props.pos === 0) {
    return (
      <>
        <StatisticLine text="No feedbak given" />
      </>
    );
  } else {
    return (
      <>
        <StatisticLine text="all" value={props.sum} />
        <StatisticLine text="avg" value={props.avg} />
        <StatisticLine text="pos" value={props.pos} />
      </>
    );
  }
};

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
      <tr>
        <td>{text}</td>
        <td>{total}</td>
      </tr>
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
  const [sum, setSum] = useState(0);
  const [avg, setAvg] = useState(0);
  const [pos, setPos] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    const updatedSum = updatedGood + neutral + bad;
    const updatedAvg = (updatedGood * 1 + bad * -1) / updatedSum;
    const updatedPos = (updatedGood / updatedSum) * 100;
    setGood(updatedGood);
    setSum(updatedSum);
    setAvg(updatedAvg);
    setPos(updatedPos);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    const updatedSum = updatedNeutral + good + bad;
    const updatedAvg = (good * 1 + bad * -1) / updatedSum;
    const updatedPos = (good / updatedSum) * 100;
    setNeutral(updatedNeutral);
    setSum(updatedSum);
    setAvg(updatedAvg);
    setPos(updatedPos);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    const updatedSum = updatedBad + good + neutral;
    const updatedAvg = (updatedBad * -1 + good * 1) / updatedSum;
    const updatedPos = (good / updatedSum) * 100;
    setBad(updatedBad);
    setSum(updatedSum);
    setAvg(updatedAvg);
    setPos(updatedPos);
  };

  return (
    <>
      <Title text="give feedbak" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Title text="statistics" />
      <table>
        <tbody>
          <Par text="good" total={good} />
          <Par text="neutral" total={neutral} />
          <Par text="bad" total={bad} />
          <Statistics sum={sum} avg={avg} pos={pos} />
        </tbody>
      </table>
    </>
  );
};

export default App;
