// // 1.1
// import React from 'react'

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1} {props.exercise1}
//       </p>
//       <p>
//         {props.part2} {props.exercise2}
//       </p>
//       <p>
//         {props.part3} {props.exercise3}
//       </p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercise {props.exercise1 + props.exercise2 + props.exercise3}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamental of React'
//   const exercise1 = 10
//   const part2 = 'Using props to pass data'
//   const exercise2 = 7
//   const part3 = 'State of a component'
//   const exercise3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
//       <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
//     </div>
//   )
// }

// export default App;

// 1.2
// import React from 'react'

// const Header = (props) => {
//   console.log(props)
//   return <h1>{props.course}</h1>
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercise}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercise={props.exercise1}/>
//       <Part part={props.part2} exercise={props.exercise2}/>
//       <Part part={props.part3} exercise={props.exercise3}/>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercise {props.exercise1 + props.exercise2 + props.exercise3}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamental of React'
//   const exercise1 = 10
//   const part2 = 'Using props to pass data'
//   const exercise2 = 7
//   const part3 = 'State of a component'
//   const exercise3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
//       <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
//     </div>
//   )
// }

// export default App;

// 1.3
import React from 'react'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercise {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamental of React',
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;