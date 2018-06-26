import React from 'react';
import uuid from 'uuid';
import style from '../styles/app.css';
import Title from '../components/title';
import ToDoList from '../components/todoList.js';
import ToDo from '../components/todo';
import TodoForm from '../components/todoForm'
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
          {
          id: 1,
              text: 'clean room'
          }, {
          id: 2,
              text: 'wash the dishes'
          }, {
          id: 3,
              text: 'feed my cat'
          }, {
            id: 4,
              text: 'walk the dog'
          }
      ]
    };
  }

  addToDo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id).bind(this);
    this.setState({data: remainder});
  }

  render() {
    return (
      <div>
        <div className={style.todoApp}>
          <Title dataList={this.state.data.length}/>
        </div>
        {/* <div>
          <TodoForm addToDo={this.addToDo}/>
        </div> */}
        <div>
          <ToDoList todoTasks={this.state.data} remove={this.removeTodo.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default hot(module)(App);
