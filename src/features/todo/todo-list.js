import React, { useState } from "react";
import { usePaginate } from "../../services/hooks/usePaginate";
import { todoListProps } from "./definitions";
import { Todo } from "../../components/todo";
import { PaginationsWrapper } from "../../components/pagination/paginations-wrapper";
import { CountPaginations } from "../../components/pagination/count-paginations";

export const TodoList = ({ todos }) => {
  const [index, setIndex] = useState(0);
  const { paginate } = usePaginate(todos);

  if (!paginate.items.length) return null;

  const showPaginateElement = () =>
    paginate.items[index].map((item, k) => <Todo key={k} title="pagination" />);

  const showSizePaginate = () =>
    [...new Array(paginate.size)].map((item, k) => (
      <CountPaginations key={k} />
    ));

  return (
    <PaginationsWrapper>
      {showPaginateElement()}
      {showSizePaginate()}
    </PaginationsWrapper>
  );
};

TodoList.propTypes = todoListProps;
