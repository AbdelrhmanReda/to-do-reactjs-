import React from "react";
import style from "../modal/modal.module.css";

const Controller = (props) => {
//   console.log(props.children);
  return (
    <>
      <div className={style.control}>{props.children}</div>
    </>
  );
};

export default Controller;
