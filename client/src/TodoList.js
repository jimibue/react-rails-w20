import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <Todo
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
          key={t.id}
          {...t}
        />
      ))}
    </ul>
  );
};

export default TodoList;
