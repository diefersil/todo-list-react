import { useState } from "react"

const TodoForm =  ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category){
        setError("Digite as opções")
            return 

        }
        addTodo(value, category)
        console.log(value,category)
        setValue("")
        setCategory("")
        setError("")

    }

    
    return(
        <div className="todo-form"> 
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <p>{error}</p>
                <input value={value} type="text" placeholder="Digite o Título" onChange={(e)=> setValue(e.target.value)}/>
                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select><br/><br/>
                <button type="submit" className="btn btn-">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm