import React from 'react';
import style from '../styles/ToDoList.css';
import ToDo from './todo';

const ToDoList = () => {
      <ul className={style.ToDoList}>
        {this.props.todoTasks.map(data => {
              <ToDo key={data.id}  data={data} onClick={() => this.props.remove(data.id)}/>
            }
          )
        }
      </ul>
}

export default ToDoList;
