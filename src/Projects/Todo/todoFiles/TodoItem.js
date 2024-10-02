import { useState } from "react";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";

export default function TodoItem({ todos, setTodos, todo }) {

    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const error = () => toast.error("Todo zaten var veya boş olamaz.");
    const remove = () => toast.success("Todo Silindi.", {
      icon: '👏'
    });


    const deleteHandle = (todos, index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
        remove()
    }

    const editHandle = (text, index) => {
        setEditIndex(index)
        setEditText(text)
      
    }

    const saveHandle = (e, index, todo) => {
        e.preventDefault()
        const newTodos = [...todos]
        if(newTodos.includes(editText.trim())){
          error()
        }
        else if(!editText){
          setEditText(todo)
        }
        else{
          newTodos[index] = editText.trim()
          setTodos(newTodos)
          setEditIndex(null)

        }
    }

    const cancel = (todo) => {
      setEditIndex(todo)
    }

  return (
    <>
      {todos.map((todo, key) => (
        <div key={key} className="flex justify-between items-center mt-3 shadow-inner p-4 ">
          <nav className="flex justify-start  mt-4 ml-[45%] items-center flex-grow text-black">
              <span>{todo}</span>
            <div className="flex items-center">
              <button onClick={() => deleteHandle(todos, key)} className="justify-center items-center flex bg-red-300 w-7 h-7 rounded-full text-white ml-1 ">
                <MdCancel />
              </button>
              <button onClick={() => editHandle(todo, key)} className="bg-yellow-200 w-20 rounded text-white mx-2">
                Edit
              </button>
              {key === editIndex && (
                <form onSubmit={e => saveHandle(e,key, todo)}>
                    <input type="text" placeholder="Edit Todo" onChange={e => setEditText(e.target.value.trim())} ></input>
                    <button className="bg-green-300 rounded text-white ml-2 w-20">Save</button>
                    <button  className="bg-red-300 rounded text-white ml-2 w-20" onClick={() => cancel(todo)}>Cancel</button>
                </form>
              )}
            </div>
          </nav>
        </div>
      ))}
    </>
  );
}
