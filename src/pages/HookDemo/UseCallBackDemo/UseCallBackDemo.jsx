import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function UseCallBackDemo() {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);
  const renderLike = () => {
    return (
      <span>
        Bạn đã thả {like} <i className="fa fa-heart text-danger"></i>{" "}
      </span>
    );
  };
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container">
      <div className="card w-25">
        <img src="https://i.pravatar.cc" alt="avatar" />
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>
                Like : {like} <i className="fa fa-heart text-danger"></i>{" "}
              </p>
              <button
                className="btn btn-danger text-white"
                onClick={() => {
                  setLike(like + 1);
                }}
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
            <div className="col-6">
              <p>Number: {number}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comment renderLike={callBackRenderLike} />
    </div>
  );
}
