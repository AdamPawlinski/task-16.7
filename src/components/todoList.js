import React from 'react';
import styles from '../styles/ToDoList.css';
import ToDo from './todo';

const ToDoList = (props) => (
      <ul className={styles.todolist}>
        {props.todoTasks.map(data => (
          <ToDo key={data.id}  data={data} remove={props.remove}/>
        ))}
      </ul>
    )

export default ToDoList;
