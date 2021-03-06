import React from "react";
import classNames from "classnames";
import "./button"

export function Button(props) {
  const { children, className, ...attributes } = props;

  const classes = classNames("btn", className);

  return (
    <button className={classes} {...attributes}>
      {children}
    </button>
  );
}