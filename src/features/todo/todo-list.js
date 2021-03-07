import React from "react";
import { usePaginate } from "../../services/hooks/usePaginate";
import { todoListProps } from "./definitions";

export const TodoList = ({ todos }) => {
  const { paginate } = usePaginate(todos);

  console.log(paginate);

  return <h1>code</h1>;
};

TodoList.propTypes = todoListProps;
