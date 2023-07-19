import React from "react";
// import style from "../modal/modal.module.css"
const Button = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
