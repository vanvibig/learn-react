import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo;
}

export default ({ todo }: TodoItemProps) => {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 hover:bg-slate-50">
        <input type="checkbox" className="scale-125" />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  )
}
