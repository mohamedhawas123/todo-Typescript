import React, { ChangeEvent, FormEvent, useState } from 'react'
import {newTodo} from './types'

interface AddTodoFormProps{
  addTodo: newTodo

}

const AddtodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  
  const [newTodo, setNewTodo] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
   

  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">Add Todo </button>
    </form>
  )
}

export default AddtodoForm