import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </ul>
  );
};

export default TodoList;
