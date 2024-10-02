import toast from "react-hot-toast";

export default function AddTodo({ todo, setTodo, todos, setTodos }) {

  const confirm = () => toast.success("Todo Eklendi.");
  const warning = () => toast.error("Todo Boş Olamaz!");
  const already = () => toast.error("Todo Zaten Var.");



  const submitHandle = e => {
    let getTodo = todo.trim()
    e.preventDefault()
    if(!getTodo)
    {
      warning()
      return
    }
    else if(todos.includes(getTodo)){
      already()
      return
    }
    else{
      setTodos([
          ...todos,
          getTodo
      ])
      setTodo('')
      confirm()
    }
  }
  
  return (
    <form onSubmit={submitHandle}>
      <input
        value={todo}
        className="border-2 border-black rounded-lg mt-10 text-black"
        type="text"
        placeholder="Todo Ekle.."
        onChange={e => setTodo(e.target.value)}
      />
      <button type="submit" className="bg-blue-400 text-white rounded h-7 w-50 ml-4">
        Add Todo
      </button>
    </form>
  );
}
