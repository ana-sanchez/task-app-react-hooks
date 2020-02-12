import React from 'react'

const Task = ({task, removeTask}) => {

  return (
    <div className='task'>
      <p>{task.name}</p>
      <p>{task.type}</p>
      <p>{task.date}</p>
      <span>{task.description}</span>
      <button
        className='button eliminar u-full-width'
        onClick={() => removeTask(task.id)}
        >ELIMINAR &times;</button>
    </div>
  );

}

export default Task