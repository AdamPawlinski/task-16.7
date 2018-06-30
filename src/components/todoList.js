import React from 'react';
import styles from '../styles/ToDoList.css';
import ToDo from './todo';

const ToDoList = (props) => (
      <ul className={styles.todolist}>
        {this.props.todoTasks.map(data => {
          return (
              <ToDo key={data.id}  data={data} remove={this.props.remove}/>
          );
        })}
      </ul>
    )

export default ToDoList;
