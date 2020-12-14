const { Checkbox, Button, Header } = require("semantic-ui-react");

const Todo = ({ id, name, complete }) => {
  return (
    <div style={styles.flex}>
      <div style={styles.flex}>
        <Checkbox defaultChecked={complete} />
        <div style={complete ? styles.complete : {}}>
          <Header as="h3">{name}</Header>
        </div>
      </div>
      <Button>Delete</Button>
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
