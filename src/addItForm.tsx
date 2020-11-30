import React, { ChangeEvent, FormEvent, useState } from 'react'


const AddtodoForm: React.FC = () => {
  
  const [newTodo, setNewTodo] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)

  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {

  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit">Add Todo </button>
    </form>
  )
}

export default AddtodoForm