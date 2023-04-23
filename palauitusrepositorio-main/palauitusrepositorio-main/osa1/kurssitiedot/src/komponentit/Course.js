import React from 'react'
/*
JM fullstackopen 2023 
kurssit
*/
const Course = ({ course }) => (
  <div>
    {course.name && <Header name={course.name} />}
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const Header = ({ name }) => (
  <h1>{name}</h1>
)

const Total = ({ parts }) => {
  const total = parts.reduce( (s, p) => (s + p.exercises), 0)
  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
          <Part 
            key={part.id} 
            part={part}
          />
        )
      }
    </div>
  )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

export default Course 