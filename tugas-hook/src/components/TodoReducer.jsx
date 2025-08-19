import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => { dispatch({ type: "ADD", text }); setText(""); }}>
        Tambah
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.text}
            <button onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>✔</button>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
