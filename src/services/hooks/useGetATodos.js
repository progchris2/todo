import { useCallback, useState } from "react";

export const useGetTodos = () => {
  const [todos, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = useCallback(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        setIsLoading(false);
      });
  }, [setTodo]);

  return { todos, setTodo, getTodos, isLoading };
};
