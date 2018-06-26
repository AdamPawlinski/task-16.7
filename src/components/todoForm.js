import React from 'react';
import style from '../styles/ToDoForm.css';

class ToDoForm extends React.Component {
  render() {
    return (
    <form className={style.ToDoForm} addToDo={onSubmit}>
      <input type="text" placeholder="Type your task here"/>
      <button type="submit"/>
    </form>
    );
  }
}

export default ToDoForm;
