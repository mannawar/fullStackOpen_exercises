import Content from './Content';
import Header from './Header';
import Total from './Total';
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
  const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
  return (
    <div>
      <Header course={course.name}/>
      <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name}/>
      <Total totalExercises={totalExercises}/>
    </div>
  )
}

export default App