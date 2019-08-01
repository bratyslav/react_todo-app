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
      fiteredBy: 'all',
      allCompleted: false,
      inputValue: ''
    };
  };

  setInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const { inputValue } = this.state;

    if (inputValue !== 0) {

      if (!this.state.todos.find(todo => todo.title === inputValue))
      { // если такого todo нет
        this.setState((prevState) => ({
          todos: [                 // записать todo в массив
            ...prevState.todos,
            { title: inputValue, completed: false }
          ], 
          inputValue: '',          // обнулить input
          allCompleted: false      // теперь не все сделано
        }));
      } else {
        this.setState({
          inputValue: '' // если такой todo есть: обнулить input, но не записывать
        })
      };

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

  toggleTodoComplete = (title) => {
    const { todos, allCompleted } = this.state;

    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => (
        todo.title === title
          ? { title: todo.title, completed: !todo.completed }
          : todo
      ))
    }));

    if (todos.find(todo => !todo.completed) // если такое есть (?)
      && todos.filter(todo => !todo.completed).length === 1)
    { // если все будет отмечено
      this.setState({ allCompleted: true }); // активировать 'select all' input
    };

    if (todos.find(todo => todo.title === title).completed || allCompleted)
    { // если переключается сделанный и все было сделано
      this.setState({ allCompleted: false });
    }; // то теперь не все сделано - сбросить 'select all' input
  };

  toggleAllComplete = () => {
    const { todos, allCompleted } = this.state;

    if (todos.length !== 0 && !allCompleted)
    { // если что-то есть и 'select all' input неактивен
      this.setState((prevState) => ({
        todos: prevState.todos.map(todo => ({ ...todo, completed: true })),
        allCompleted: true
      }));
    };

    if (allCompleted) {
      this.setState((prevState) => ({
        todos: prevState.todos.map(todo => ({ ...todo, completed: false })),
        allCompleted: false
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
    const { todos, allCompleted, filteredBy, inputValue } = this.state;

    return (
      <section className="todoapp">
        <TodoHeader
          addTodo={this.addTodo}
          setInputValue={this.setInputValue}
          inputValue={inputValue}
        />

        <TodoList
          todos={todos}
          toggleAllComplete={this.toggleAllComplete}
          allCompleted={allCompleted}
          filterTodoList={this.filterTodoList}
          deleteTodo={this.deleteTodo}
          toggleTodoComplete={this.toggleTodoComplete}
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