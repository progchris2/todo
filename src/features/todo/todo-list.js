import React from "react";
import { usePaginate } from "../../services/hooks/usePaginate";
import { todoListProps } from "./definitions";
import { PaginationsWrapper } from "../../components/pagination/paginations";
import { Todo } from "../../components/todo";

export const TodoList = ({ todos }) => {
  const { paginate } = usePaginate(todos);

  return (
    <PaginationsWrapper>
      <Todo />
      fjkfgkndnvkjdgvn
    </PaginationsWrapper>
  );
};

TodoList.propTypes = todoListProps;
