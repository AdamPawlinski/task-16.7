import React from 'react';
import style from '../styles/ToDoList.css';

class ToDoList extends React.Component {
  render() {
    const {todoTasks} = this.props;
    const todoTask = todoTasks.map(data => {
        <li key={data.id}>
          <h3>{data.id}</h3>
          <span>{data.text}</span>
        </li>
    });

    return (
    <ul className={style.todolist} onClick={this.props.remove}>
      {this.todoTask}
    </ul>
    );
  }
}

export default ToDoList;
