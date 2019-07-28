import React from 'react';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
const ENTER = 13;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      inputValue: '',
      fiteredBy: '',
      allCompleted: false
    };
  };

  componentDidMount() {
    this.setState({ filteredBy: 'all' })
    // потому что на момент рендеринга filteredby еще 'undefined'
  }

  addTodo = (event) => {
    event.persist();
    const { value } = event.target;

    if (event.keyCode === ENTER && value.length !== 0) { // по нажатию enter
      if (!this.state.todos.find(todo => todo.title === value))
      { // если такого todo нет
        this.setState((prevState) => ({
          todos: [ // записать в массив
            ...prevState.todos,
            { title: value, completed: false }
          ], 
          inputValue: '', // обнулить input
          allCompleted: false // теперь не все сделано
        }));
      } else {
        this.setState({
          inputValue: '' // если такой todo есть: обнулить input, но не записывать
        })
      }
    } else { // иначе записывать вводимый текст
      this.setState({ inputValue: value });
    }; 
  };

  deleteTodo = (title) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.title !== title)
    }));

    if (this.state.todos.length === 1) { // если список станет пуст
      this.setState({ allCompleted: false }) // сбросить 'select all' input
    }
  };

  setTodoAsCompleted = (title) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => (
        todo.title === title ? { ...todo, completed: true } : todo
      ))
    }));

    if (this.state.todos.filter(todo => !todo.completed).length === 1)
    { // если все будет отмечено
      this.setState({ allCompleted: true }) // активировать 'select all' input
    }
  };

  setAllAsCompleted = () => {
    if (this.state.todos.length !== 0) { // можно отметить все, если что-то есть
      this.setState((prevState) => ({
        todos: prevState.todos.map(todo => ({ ...todo, completed: true })),
        allCompleted: true
      }));
    };
  };

  setFilterAttribute = (attribute) => {
    this.setState({ filteredBy: attribute });
  };

  filterTodoList = (todos) => {
    return todos.filter(todo => {
      switch (this.state.filteredBy) {
        case 'active':
          return !todo.completed;

        case 'completed':
          return todo.completed;

        default:
          return true;
    }})
  };

  deleteAllCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));

    if (!this.state.todos.find(todo => !todo.completed)) 
    { // если список будет пуст
      this.setState({ allCompleted: false }) // сбросить 'select all' input
    };
  };

  render() {
    const { todos, inputValue, allCompleted, filteredBy } = this.state;

    return (
      <section className="todoapp">
        <TodoHeader
          addTodo={this.addTodo}
          inputValue={inputValue}
        />

        <TodoList
          todos={todos}
          setAllAsCompleted={this.setAllAsCompleted}
          allCompleted={allCompleted}
          filterTodoList={this.filterTodoList}
          deleteTodo={this.deleteTodo}
          setTodoAsCompleted={this.setTodoAsCompleted}
        />

        <TodoFooter
          todos={todos}
          filteredBy={filteredBy}
          setFilterAttribute={this.setFilterAttribute}
          deleteAllCompleted={this.deleteAllCompleted}
        />
      </section>
    );
  };
};

export default App;