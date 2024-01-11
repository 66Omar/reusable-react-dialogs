import React, { useEffect, useState } from 'react'
import { toDo, toDoItemProps } from '../types/TodoTypes'
import { useDialogContext } from '../contexts/DialogContext';

const TodoPage: React.FC = () => {
  const [toDos, setTodos] = useState<toDo[]>([])
  const [loading, setLoading] = useState(false)
  
  async function getTodos() {
    setLoading(true)
    const response = await fetch("https://dummyjson.com/todos", { method: 'GET' });
    if (response.status === 200) {
      const { todos } = await response.json()
      setTodos(todos)
    }
    setLoading(false)
  }

  function onDelete(toDoId: number) {
    setTodos(prev => prev.filter((currentTodo) => currentTodo.id !== toDoId))
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    loading ? (<div>Loading...</div>) :
    <main>
      {toDos?.map((toDo) => (
        <TodoItem key={toDo.id} toDo={toDo} onDelete={onDelete}></TodoItem>
      ))}
    </main>
  )
}


const TodoItem: React.FC<toDoItemProps> = ({ toDo, onDelete }) => {
  const { setDialog } = useDialogContext()
  const cardClass = `p-3 mb-3 card ${toDo.completed && "completed" }`
  
  function showWarning() {
    setDialog({
      header: 'Delete Todo',
      body: `Would you like to proceed with deleting this To Do? (toDoId: ${toDo.id})`,
      positive: { text: "Yes", action: deleteTodo },
      negative: {text: "Cancel", action: ()=>{}}
    })
    
  }

  function deleteTodo() {
    onDelete(toDo.id)
  }

  return (
    <article className={cardClass}>
      <div className="card-body">
        <div className="d-flex">
          <h3 className="card-title">
            {toDo.todo} ({toDo.id})
          </h3>
        </div>
        <button className='btn btn-danger' style={{ float: "right" }} onClick={showWarning}>Delete</button>
      </div>
    </article>
  );
}


export default TodoPage