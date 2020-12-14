const { Checkbox, Button, Header } = require("semantic-ui-react");

const Todo = ({ id, name, complete, deleteTodo, updateTodo }) => {
  return (
    <div style={styles.flex}>
      <div style={styles.flex}>
        <Checkbox onClick={() => updateTodo(id)} defaultChecked={complete} />
        <div style={complete ? styles.complete : {}}>
          <Header as="h3">{name}</Header>
        </div>
      </div>
      <Button onClick={() => deleteTodo(id)} color="red">
        Delete
      </Button>
    </div>
  );
};

export default Todo;

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  },
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
};
