import React, { useState } from "react";
import Card from "../Card/Card";
import "./app.css";
import Filter from "../Filter/filter";
import Modal from "../modal/Modal";
import BackDrop from "../modal/BackDrop";
import Button from "../Layout/Button";

const App = () => {
  //  const input = useRef(null)
  const [state, setState] = useState([
    { title: "ahmed", details: 19, id: 0, done: false },
    { title: "ali", details: 19, id: 1, done: false },
    { title: "salah", details: 19, id: 2, done: false },
  ]);
  const [done, setDone] = useState(false);
  const [name, setNames] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const deletHandler = (clickidx) => {
    console.log(`from delete ${clickidx}`);
    setState((prevState) => {
      return prevState.filter((p) => p.id !== clickidx);
    });
  };
  const checkHandler = (id) => {
    setState((prevState) => {
      const updatedState = [...prevState];
      console.log(updatedState);
      updatedState[id]['done'] = !updatedState[id]['done'];
      return updatedState;
    });
  };
  const toggle = () => {
    setToggleState(!toggleState);
    // return toggleState
  };
  // let onChange = () => {
  //   console.log(input.current);
  // };
  const sendFilter = (names) => {
    setNames(names);
    // console.log(names)
  };
  const nameFilter = () => {
    const newNames = state.filter((f) => f.title.includes(name));
    console.log(newNames)
    if (name.length !== 0) return newNames;
    return state;
  };
  let AddNewState = (input) => {
    const id = state.length;
    const done = false ; 
    input = { ...input, id , done };
    console.log(`from add`);
    console.log(input);
    setState([...state, input]);
  };

  return (
    <>
      <div className="mainContainer">
        <Modal show={showModal} getData={(a) => AddNewState(a)} />
        <BackDrop show={showModal} close={() => setShowModal(false)} />
        <h1>To-Do</h1>
        <div className="button">
          <Button onClick={toggle} className="btn btn-warning">
            Toggle
          </Button>

          <Button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            {" "}
            New
          </Button>
          {/* <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            New
          </button> */}
        </div>
        <Filter sendFilter={sendFilter}></Filter>
        <div>
          <div className={toggleState ? "show" : "hide"}>
            <Card
              title={nameFilter()}
              delete={deletHandler}
              checkHandler={checkHandler}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
