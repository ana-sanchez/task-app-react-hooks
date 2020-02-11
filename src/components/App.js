import React, { Fragment } from "react";
import Form from './Form'
import '../styles/App.css';

function App() {
  return (
    <Fragment>
      <h1>Añade una lista de tarea</h1>
      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Form />
          </div>
        </div>  
      </div>
    </Fragment>
   
  );
}

export default App;
