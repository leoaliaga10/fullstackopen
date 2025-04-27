const Course = (props) => {
  const Header = (props) => {
    console.log("Nombre", props.name);
    return (
      <>
        <h1>{props.name}</h1>
      </>
    );
  };
  const Content = (props) => {
    console.log("Contenido ", props.parts[0].name);
    const Part = (props) => {
      console.log("Parte Nombre ", props.name);
      return (
        <>
          <p>
            {props.name} {props.exercises}
          </p>
        </>
      );
    };
    return (
      <>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        <Part name={props.parts[3].name} exercises={props.parts[3].exercises} />
      </>
    );
  };
  const Total = (props) => {
    console.log("Parte Ejercicios ", props.parts[0].exercises);
    return (
      <>
        <p>
          Total of{" "}
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises +
            props.parts[3].exercises}{" "}
          exercises
        </p>
      </>
    );
  };
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
