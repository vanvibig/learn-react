import { Todo } from '../types/todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCompletedChange,
  onDelete,
}) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) return b.id - a.id
    return a.completed ? 1 : -1
  })

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && <p className="text-gray-500 text-center text-sm">No todos</p>}
    </>
  )
}

export default TodoList
