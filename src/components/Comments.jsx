import React from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/reducers/actions";

function Comments({ comment }) {
const dispatch=useDispatch()
  return (
    <div className="comments container-fluid">
      <div>
        comment: {comment.body} <button className="btn deletebtn" onClick={() =>
                      dispatch({ type: actions.DELETE_COMMENT, payload: comment.id })
                    }>x</button>
      </div>
      <div>date:{comment.date}</div>
    </div>
  );
}
export default Comments;
