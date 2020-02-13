import React, {Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types'

const Form = ({makeTask}) => {


  const [ task, updateTask] = useState({
    name: '',
    type: '',
    date: '',
    description: ''
});

const [ error, updateError ] = useState(false)

const handleStage = e => {
  updateTask({
    ...task,
    [e.target.name] : e.target.value
  })
}

const submitTask = e => {
      e.preventDefault()

      if(name.trim() === '' || type.trim() === '' || date.trim() === '' || description.trim() === '') {
        updateError(true)
        return; 
      } else {
        updateError(false)
      }

      task.id = uuid()

      makeTask(task)

      updateTask({
        name: '',
        type: '',
        date: '',
        description: ''
      })
}

const { name, type, date, description } = task;


  return (

    <Fragment>
    <h2>Crea una tarea</h2>
    {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
    <form
      onSubmit={submitTask}
    >
      <label>Nombre Tarea</label>
      <input 
        type='text'
        name='name'
        className='u-full-width'
        placeholder='Nombre tarea'
        onChange={handleStage}
        value={name}
      />

      <label>Tipo Tarea</label>
      <input 
        type='text'
        name='type'
        className='u-full-width'
        placeholder='Tipo de tarea'
        onChange={handleStage}
        value={type}
      />

      <label>Fecha</label>
      <input 
        type='date'
        name='date'
        className='u-full-width'
        onChange={handleStage}
        value={date}
      />

      <label>Descripción</label>
      <textarea
        className='u-full-width'
        name='description'
        onChange={handleStage}
        value={description}
      ></textarea>

      <button
        type='submit'
        className='u-full-width button-form'
      >Agregar Tarea</button>
    </form>
</Fragment>

  )
}

Form.propTypes = {
  makeTask: PropTypes.func.isRequired
}

export default Form