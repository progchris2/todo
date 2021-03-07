import { useEffect } from "react";
import { useGetTodos } from "./services/hooks/useGetATodos";
import { TodoList } from "./features/todo/todo-list";
import { Header } from "./components/headers";
import "./styles.css";

export default function App() {
  const { todos, getTodos, isLoading } = useGetTodos();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (isLoading) return <h1>Chargement du profil...</h1>;

  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}
