import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import TodoList from "./TodoList";
import axios from "axios";
import TodoForm from "./TodoForm";

const dummyData = [
  { id: 1, name: "tood1", complete: true },
  { id: 2, name: "todo2", complete: false },
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
      // gets from database
      let res = await axios.get("/api/items?sort=name&yo=yoyo&test=x");
      // updates UI
      setTodos(res.data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const addTodo = async (todo) => {
    try {
      // adds to database
      let res = await axios.post("/api/items", todo);
      // updates UI
      setTodos([...todos, res.data]);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTodo = async (id) => {
    try {
      // removes from database
      let res = await axios.delete(`/api/items/${id}`);
      // removes from UI
      //could also use res.data.id instaed of id, both work
      let newTodos = todos.filter((t) => t.id !== id);
      setTodos(newTodos);
    } catch (err) {
      console.log(err);
    }
  };
  const updateTodo = async (id) => {
    try {
      let res = await axios.put(`/api/items/${id}`);
      let newTodos = todos.map((t) =>
        t.id !== id ? t : { ...t, complete: !t.complete }
      );

      setTodos(newTodos);
    } catch (err) {
      console.log(err);
    }
  };
  const renderTodoList = () => {
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return (
      <>
        <TodoForm addTodo={addTodo} />
        <TodoList
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
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
