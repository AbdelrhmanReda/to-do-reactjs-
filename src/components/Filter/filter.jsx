import React, { useState } from "react";
const Filter = (props) => {
  const [filter,setFilter]=useState("");
  let onChange = (e) =>{
    setFilter(e.target.value)
    props.sendFilter(e.target.value)
  }
  return (
    <>

      <div style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Filter " onChange={onChange} value={filter} />
      </div>
    </>
  );
};

export default Filter;
