import React from 'react';
import uuid from 'uuid';
import styles from '../styles/app.css';
import Title from '../components/title';
import ToDoList from '../components/todoList.js';
import ToDo from '../components/todo';
import TodoForm from '../components/todoForm'
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textToDo: '',
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
    this.addToDo = this.addToDo.bind(this);
    this.changeToDo = this.changeToDo.bind(this);
  }

  changeToDo(e) {this.setState({textToDo: e.target.value});}

  addToDo(e) {
    e.preventDefault();
    const todo = {
      id: uuid.v4(),
      text: this.state.textToDo
    };
    this.setState({
      textToDo: '',
      data: [...this.state.data, todo]
    });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }

  render() {
    return (
      <div className={styles.toDoApp}>
        <div className={styles.title}>
          <Title dataList={this.state.data.length}/>
        </div>
        <div>
          <TodoForm addToDo={this.addToDo} changeToDo={this.changeToDo} textToDo={this.state.textToDo}/>
        </div>
        <div>
          <ToDoList todoTasks={this.state.data} remove={this.removeTodo.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default hot(module)(App);
