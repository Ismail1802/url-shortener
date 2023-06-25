import React, { useState } from "react";
import classes from "./Links.module.css";

const Links = ({ value, short, setClicked, id, btntext }) => {
  const copied = (id) => {
    setClicked(id);
    console.log(id);
  };

  return (
    <article className={classes.links}>
      <p className={classes["p-one"]}>{value}</p>
      <hr />
      <p className={classes["p-two"]}>{short}</p>
      <button
        onClick={() => {
          copied(id);
        }}
        className={classes.copy}
        style={{
          backgroundColor: btntext === "Copied!" ? "hsl(257, 27%, 26%)" : "",
        }}
      >
        {btntext}
      </button>
    </article>
  );
};

export default Links;
