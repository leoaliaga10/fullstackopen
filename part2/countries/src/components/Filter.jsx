const Filter = ({ countrie, onShow }) => {
  return (
    <>
      <div>
        {countrie}
        <button onClick={() => onShow(countrie)}>Show</button>
      </div>
    </>
  );
};
export default Filter;
