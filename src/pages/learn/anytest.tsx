import { useReducer } from 'react'
import ReactDOM from 'react-dom/client'

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
]

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

export const AnyTest = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo: any) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  return (
    <>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  )
}
