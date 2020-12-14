import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import TodoList from "./TodoList";
import axios from "axios";
import TodoForm from "./TodoForm";

const dummyData = [
  { name: "tood1", complete: true },
  { name: "todo2", complete: false },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      let res = await axios.get("/api/items");
      setTodos(res.data); // need to look at res to double check
    } catch (err) {
      // setError(true);
      setTodos(dummyData); // TODO fix when api setup
      console.log("err");
    } finally {
      setLoading(false);
    }
  };
  const addTodo = async (todo) => {
    try {
      let res = await axios.post("/api/items", { todo: todo });
      // lets pretend res.data is our new item
      setTodos([...todos, res.data]);
      console.log(res);
    } catch (err) {
      setTodos([...todos, { ...todo, id: Math.random(), complete: false }]);
      console.log(err);
    }
  };
  const renderTodoList = () => {
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return (
      <>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </>
    );
  };

  return (
    <Container>
      <Header>App Here</Header>
      <p>some info to look at wether or not data is loading</p>
      {renderTodoList()}
    </Container>
  );
}

export default App;
