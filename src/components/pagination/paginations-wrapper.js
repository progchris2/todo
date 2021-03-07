import React from "react";

export const PaginationsWrapper = ({ children }) => {
  React.Children.toArray(children).map((v) => console.log(v.props));
  //console.log(React.Children.toArray(children));
  return <div>{children}</div>;
};
