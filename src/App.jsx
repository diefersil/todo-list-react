import { useState } from 'react'
import "./App.css"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import Search from "./components/Search"
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category: "trabaho",
      isComplete: false
    },
    {
      id:2,
      text: "Ir para Academia",
      category: "saude",
      isComplete: false
    },
    {
      id:3,
      text: "Fazer compraas",
      category: "casa",
      isComplete: false
    }
  ])

  /*const addTodo = (text,category) => {
    todos.push({
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    })
  }*/
  const addTodo = (text,category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      }
    ]
    setTodos(newTodos)
  }

  
  const [search,setSearch] = useState("")

  const [filter,setFilter] = useState("All")

  const [sort,setSort] = useState("Asc")
  

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => (
      todo.id !== id ? todo : null)
    )
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map( (todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    )
    setTodos(newTodos)

  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>

      <Search search={search} setSearch={setSearch} />
      
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      
      <div className="todo-list">
        {todos
          .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
