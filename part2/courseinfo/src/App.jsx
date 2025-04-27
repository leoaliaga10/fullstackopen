const Course = (props) => {
  const Header = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
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
      <Header name={props.course[0].name} />
      <Content parts={props.course[0].parts} />
      <Total parts={props.course[0].parts} />
      <Header name={props.course[1].name} />
      <Content parts={props.course[1].parts} />
      <Total parts={props.course[1].parts} />
    </>
  );
};
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={courses} />;
};

export default App;
