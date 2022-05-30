import React from "react";
import { connect, useDispatch} from "react-redux";
import actions from "../redux/reducers/actions";
import Comments from "./Comments";
export function PostModal({ post,comments}) {
  const dataTargetBtn = `#modal${post.id}`;
  const dataTarget = `modal${post.id}`;
  const dispatch = useDispatch();
 
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();
  const newComment = {
    date: output,
    postId: post.id
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={dataTargetBtn}
      >
        See more...
      </button>

      <div
        className="modal fade"
        id={dataTarget}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {post.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={post.image} className="card-img-top" alt={post.id} />
              <div className="card-body">
                <div className="card-title">
                  <div>Price:{post.price}$</div>
                </div>
                <div className="card-text">
                  <div className="description">
                    Description: {post.description}
                  </div>

                  <div>Weight:{post.weight}kg</div>
                  <div>
                    Size h-{post.size.height} w-{post.size.width}
                  </div>
                  <div>
                    Count: {post.count < 1 ? "not available" : post.count}
                  </div>
                </div>
                <div>
                  {comments.map(
                    (comment) =>
                      comment.postId === post.id && (
                        <Comments
                          key={comment.id + post.image}
                          comment={comment}
                        />
                      )
                  )}
                </div>
                <div className="modal-footer">
                  <form>
                    {" "}
                    <input
                      className="input"
                      placeholder="leave comment..."
                      onChange={(e) => (newComment.body = e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        newComment.date = dispatch({
                          type: actions.CREATE_COMMENT,
                          payload: newComment
                        });
                      }}
                    >
                      comment
                    </button>
                  </form>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch({ type: actions.DELETE_DATA, payload: post.id })
                    }
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: [...state.commentReducer.comments]
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
