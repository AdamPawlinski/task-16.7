import React from 'react';
import style from '../styles/ToDoForm.css';

const ToDoForm = (props) => (
    <form className={style.ToDoForm} onSubmit={props.addToDo}>
      <input type="text" placeholder="Type your task here" value={props.textToDo} onChange={props.changeToDo}/>
      <button type="submit" value="submit">add task</button>
    </form>
)

export default ToDoForm;
