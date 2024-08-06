import { useState } from 'react'
import TodoItem from './components/TodoItem'
import { dummyData } from './data/todos'

function App() {
  const [todos, setTodos] = useState(dummyData)

  const setTodoCompleted = (id: number, completed: boolean) => {
    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = completed
      }
    })
    setTodos(previousTodos => {
      return previousTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo,
      )
    })
  }

  return (
    <main className="h-screen space-y-5 py-10">
      <h1 className="text-center text-3xl font-bold">Your Todos</h1>
      <div className="mx-auto max-w-lg rounded-md bg-slate-100 p-5">
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
