import React, { useState } from 'react';
import TodoList from './Todolist';
import { Todo, newTodo } from './types';
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

  const addTodo: newTodo = newTodo => { newTodo.trim() !== "" &&
    setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddtodoForm addTodo={addTodo} />
    </React.Fragment>
    
  );
}

export default App;
