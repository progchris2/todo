import { useEffect, useState } from "react";

export const usePaginate = (todos) => {
  const [paginate, setPaginate] = useState({
    items: [],
    size: 0
  });

  useEffect(() => {
    let items = [];
    let table = [];

    todos.forEach((element, i) => {
      table = [...items, element];
      if ((i + 1) % 10 === 0) {
        items = [...table, table.length > 10 ? table.slice(0, 10) : table];
      }
    });

    setPaginate({
      items,
      size: items.length
    });
  }, [todos]);

  return {
    paginate
  };
};
