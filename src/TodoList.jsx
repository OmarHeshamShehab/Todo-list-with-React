import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          //    below is the long described version of above
          //   <TodoItem
          //     id={todo.id}
          //     completed={todo.completed}
          //     title={todo.title}
          //     />
        );
      })}
    </ul>
  );
}
