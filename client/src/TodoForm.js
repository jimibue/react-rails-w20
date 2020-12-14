import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    props.addTodo({ name });
    setName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label={"Todo"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Form.Button type="submit">add</Form.Button>
    </Form>
  );
};
