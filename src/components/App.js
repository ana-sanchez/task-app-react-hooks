import React, { Fragment, useState } from "react";
import Form from './Form'
import Task from './Task'
import '../styles/App.css';

function App() {


const [tasks, handleTask] = useState([])


const makeTask = task => {
  handleTask([
    ...tasks,
    task
  ])
}


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
            {tasks.map( task => (
              <Task 
                task={task}
                key={task.id}
              />
            ))}
           
          </div>
        </div>  
      </div>
    </Fragment>
   
  );
}

export default App;
