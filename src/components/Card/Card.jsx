import React from "react";
import "../App/app.css";
const Card = (props) => {
  // console.log({ props });
  //   console.log(color)

  return (
    <>
      {props.title.map(({ title, details, id }) => (
        <div
          className="cardWrapper"
          key={id}
          // style={{ backgroundColor: props.type === "men" ? "white" : "pink" }}
        >
          <div>Task :{title}</div>
          <div>Description :{details}</div>
          <div className="button">
            <button
              onClick={() => props.delete(id)}
              className="btn btn-warning"
            >
              delete
            </button>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id=""
                onChange={() => props.checkHandler(id)}
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                Done
              </label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
