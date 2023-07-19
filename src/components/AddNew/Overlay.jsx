import React, { useState } from "react";
import style from "../modal/modal.module.css";
import Controller from "../Layout/Controller";
import Button from "../Layout/Button";

const Overlay = (props) => {
  const [data, setData] = useState({
    title: "",
    details: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello", this.current.value);
    // console.log("FROM SUBMIT")
    // console.log(data)
    // console.log(props)
    props.getData(data);
  };
  let onChange = (e) => {
    // console.log(`${e.target.name} is ${e.target.value}`);
    //  data[e.currentTarget.name] =e.currentTarget.value
    //  setData(data)
    let input = { ...data };
    input[e.currentTarget.name] = e.currentTarget.value;
    setData(input);
  };
  // let getData = ()=>{
  //   props.getData=data ;
  // }
  return (
    <>
      <div className={style.overlay}>
        <h2>Add New Record</h2>
        <Controller>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title" className="col-2">
              Title
            </label>
            <input
              type="name"
              name="title"
              placeholder="Enter Name"
              onChange={onChange}
              value={data.name}
            />
            <br />
            <label htmlFor="details" className="col-2">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter Details"
              onChange={onChange}
              value={data.details}
            />

            {/* <button type="submit" className="btn btn-primary">
              Add
            </button> */}
            <div className={style.button}>
              <Button type="submit" className="btn btn-primary">
                Add
              </Button>
            </div>
          </form>
        </Controller>
      </div>
    </>
  );
};

export default Overlay;
