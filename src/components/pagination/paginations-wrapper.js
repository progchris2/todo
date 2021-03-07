import React from "react";

export const PaginationsWrapper = ({ children }) => {
  console.log(React.Children.toArray(children));
  return <div>{children}</div>;
};
