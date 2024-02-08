import React, { useState } from 'react';
import ShowTodoList from '../component/ShowTodoList';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todoText === "") {
      alert("TODOを入力してください。");
      return;
    }

    setTodoList([...todoList, todoText]);
    setTodoText("");
  }

  const handleChangeText = e => {
    setTodoText(e.target.value);
  }

  const handleDeleteTodo = paramIndex => {
    const newTodoList = todoList.filter((data, index) => {
      return index !== paramIndex;
    });
    setTodoList([...newTodoList]);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Todo App</span>
        </div>
      </nav>
      <div className="container pt-3 w-75">
        <div className="d-flex">
          <input type="text" className="form-control" value={todoText} onChange={handleChangeText} />
          <button type="button" className="btn btn-primary ms-3" onClick={handleAddTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </div>
        <ShowTodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo}/>
      </div>
    </div>
  );
}

export default App;
