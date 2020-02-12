import React, { Fragment, useState, useEffect } from "react";
import Form from './Form'
import Task from './Task'
import '../styles/App.css';

function App() {


  let newTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!newTasks) {
    newTasks = []
  }

  const [tasks, handleTask] = useState(newTasks)

  useEffect( () => {
    if(newTasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, [tasks]);

const makeTask = task => {
  handleTask([
    ...tasks,
    task
  ])
}



const removeTask = id => {
  const newTask = tasks.filter( task => task.id !== id);
  handleTask(newTask)
} 

const title = tasks.length === 0 ? 'no hay tareas' : 'lista de tareas'

  return (
    <Fragment>
      <h1>Task App</h1>
      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Form 
              makeTask= {makeTask}
            />
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {tasks.map( task => (
              <Task 
                task={task}
                key={task.id}
                removeTask={removeTask}
              />
            ))}
           
          </div>
        </div>  
      </div>
    </Fragment>
   
  );
}

export default App;
