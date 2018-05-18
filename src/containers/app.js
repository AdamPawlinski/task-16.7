import React from 'react';
import uuid from 'uuid';
import style from '../styles/app.css';
import Title from '../components/title';
import ToDoList from '../components/todoList.js';

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
          }
      ]
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !==id);
    this.setState({data: remainder});
  }

  dataLength(data) {
    return this.state.data.length;
  }

  render() {
    return (
      <div className={style.todoApp}>
        <Title dataList={this.dataLength}/>
        <ToDoList todo={this.state.data} remove={this.removeTodo}/>
      </div>
    )
  }
}

export default App;
