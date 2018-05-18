import React from 'react';
import style from '../styles/ToDoList.css';

const ToDoList = props => {
  const todoListMap = this.props.todo.map(function(data){
    return (
      <li>
        <h3>{data.id}</h3>
        <span>{data.text}</span>
      </li>
    )
  },
  render(){
    return (
      <ol className = {style.todolist} onClick = {props.remove}>
        <{todoListMap}/>
      </ol>
    )
  }
}

export default ToDoList;
