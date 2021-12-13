import React, { useState, useEffect } from 'react';

export default function Count() {
  const [todolist, setTodolist] = useState([]);
  const [task, setTask] = useState('');
  const [lastitem, setlastitem] = useState(null);

  useEffect(() => {
    setlastitem(todolist.length - 1);
  }, [todolist]);

  useEffect(() => {
    localStorage.setItem('todos', todolist);
  }, [todolist]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    if (task !== '') {
      const newTodo = todolist.concat([task]);

      setTodolist(newTodo);
    } else {
      alert('Pas de valuer null !');
    }

    setTask('');
  }

  function handleRemove(removeIndex) {
    setTodolist(
      todolist.filter((item, index) => {
        if (index != removeIndex) {
          return item;
        }
      })
    );
  }

  return (
    <div>
      <h1>To do :</h1>
      <input type="text" value={task} onChange={handleChange}></input>

      <button onClick={handleAdd}>add task</button>

      {todolist.map((item, i) => {
        return (
          <p style={{ color: i === lastitem ? 'red' : 'black' }} key={i}>
            {item}

            <button
              onClick={() => {
                handleRemove(i);
              }}
            >
              X
            </button>
          </p>
        );
      })}
    </div>
  );
}
