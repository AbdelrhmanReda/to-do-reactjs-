import { React, Fragment } from "react";
import * as ReactDOM from "react-dom";

// import style from "./modal.module.css";
import BackDrop from "./BackDrop";
import Overlay from "../AddNew/Overlay";
const Modal = (props) => {
  return (
    props.show && (
      <Fragment>
        {ReactDOM.createPortal(
          <>
            <BackDrop />
            <Overlay getData={props.getData}/>
          </>,
          document.getElementById("modal")
        )}
      </Fragment>
    )
  );
};

export default Modal;
