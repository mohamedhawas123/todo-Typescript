import React from 'react'
import { Todo, ToggleTodo } from './types'
import './todolistItem.css'



interface TodoListprops {
  todo: Todo,
  toggleTodo:ToggleTodo
}

export const TodoListItem: React.FC<TodoListprops> = ({todo, toggleTodo}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  )
}

