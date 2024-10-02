import Header from './todoFiles/Header';
import { useState } from 'react';
import AddTodo from './todoFiles/AddTodo';
import TodoList from './todoFiles/TodoList';
import { Toaster } from 'react-hot-toast';


function App() {
  const[todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');


  return (
    <>
    <Header />
    <AddTodo todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
    <TodoList todos={todos} setTodos={setTodos} todo={todo}/>
    <Toaster position="top-right" />
    </>
  );
}

export default App;