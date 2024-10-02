import TodoItem from "./TodoItem";

export default function TodoList({todos, setTodos, todo}){
    return(
        <>
        <ul>
            <TodoItem todos={todos} setTodos={setTodos} todo={todo}/>
        </ul>
        </>
    )
}