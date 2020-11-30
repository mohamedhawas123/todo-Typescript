import React, { useState } from 'react';
import TodoList from './Todolist';
import { Todo } from './types';
import AddtodoForm from './addItForm'

const initalTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  {text: "take her number", complete: false}
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(initalTodos)

  const toggleTodo = (selectedOne:Todo) => {
    const newTodo = todos.map(todo => {
      if (todo === selectedOne) {
        return {
          ...todo, 
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodo)
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddtodoForm />
    </React.Fragment>
    
  );
}

export default App;
