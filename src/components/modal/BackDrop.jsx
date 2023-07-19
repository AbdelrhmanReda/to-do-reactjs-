import React from "react";
import style from "./modal.module.css";

const BackDrop = (props) => {
  return (
    props.show && (
      <>
        <div className={style.backDrop} onClick={props.close}></div>;
      </>
    )
  );
};

export default BackDrop;
