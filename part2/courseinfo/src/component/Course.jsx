// code very important

const Course = (props) => {
  const Header = (props) => {
    return (
      <>
        <h2>{props.name}</h2>
      </>
    );
  };
  const Content = (props) => {
    const Part = ({ data }) => {
      //console.log(data);

      return (
        <>
          {data.map((elemento) => (
            <p key={elemento.id}>
              {elemento.name} {elemento.exercises}
            </p>
          ))}
        </>
      );
    };
    return (
      <>
        <Part data={props.parts} />
      </>
    );
  };
  const Total = (props) => {
    const parts = props.parts;

    const total = parts.reduce((s, p) => {
      return s + p.exercises;
    }, 0);
    return (
      <>
        <p>Total of {total} exercises</p>
      </>
    );
  };
  return (
    <>
      <h1>Web development curriculum</h1>
      <Header name={props.course[0].name} />
      <Content parts={props.course[0].parts} />
      <Total parts={props.course[0].parts} />
      <Header name={props.course[1].name} />
      <Content parts={props.course[1].parts} />
      <Total parts={props.course[1].parts} />
    </>
  );
};

export default Course;
