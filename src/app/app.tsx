import React from 'react';
import TodoForm from './TodoForm';
import { useTodoStore } from '../store/todoStore';

export function App() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
