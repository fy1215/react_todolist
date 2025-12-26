import { useState } from "react";

function Header() {
  return (
    <h1>俺のToDoアプリ</h1>
  )
}

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo)}>削除</button>
      <button onClick={() => onToggle(todo)}>完了</button>
    </li>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Reactを学ぶ", completed: false },
    { text: "ToDoアプリを作る", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo.text !== todoToDelete.text));
  };

  const toggleComplete = (todoToToggle) => {
    setTodos(todos.map(todo => {
      if (todo.completed) {
        console.log(todo);
      }
      if (todo.text === todoToToggle.text) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    }))
  }

  return (
    <div>
      <Header />
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;