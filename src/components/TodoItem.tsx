import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo
  onCompletedChange: (id: number, completed: boolean) => void
}

const TodoItem = ({ todo, onCompletedChange }: TodoItemProps) => {
  return (
    <div>
      <label className="flex items-center gap-2 rounded-md border border-gray-400 p-2 hover:bg-slate-50">
        <input
          checked={todo.completed}
          type="checkbox"
          className="scale-125"
          onChange={e => onCompletedChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? 'text-gray-400 line-through' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  )
}

export default TodoItem
