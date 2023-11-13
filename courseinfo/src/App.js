const Header = (props) => {
  console.log(props.course)
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}

// {props.course}

const Part = (props) => {
  return(
    <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
    </>
  )
}

/*
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
}) 
*/

const Content = (props) => {
  return(
    <>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}/>
    <Part part={props.parts[2]}/>
    </>
  )
}

const Total = (props) => {

  let summa = 0
  props.parts.forEach(part => {
    summa = summa + part.exercises
  });

  return(
    <>
    <p>Number of exercises {summa}
    </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

