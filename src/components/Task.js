import React from 'react'

const Task = ({task}) => {

  return (
    <div className='task'>
      <p>{task.name}</p>
      <p>{task.type}</p>
      <p>{task.date}</p>
      <p>{task.description}</p>
    </div>
  )

}

export default Task