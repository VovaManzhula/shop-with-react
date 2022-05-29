import React from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/reducers/actions";
function AddModal() {
  const dispatch = useDispatch();
  let newPost = {
    title: "",
    price: "",
    image: "",
    count: "",
    description: "",
    weight: "",
    size: {
      height: "",
      width: ""
    }
  };

  return (
    <div>
      <button
        type="button"
        className="add-btn btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        add post
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add you'r post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <input
                  className="form-control"
                  placeholder="Name here..."
                  onChange={(e) => (newPost.title = e.target.value)}
                />
                <input
                  className="form-control"
                  placeholder="Img URL here..."
                  onChange={(e) => (newPost.image = e.target.value)}
                />

                <div className="input-group">
                  <input
                    placeholder="Count..."
                    className="form-control"
                    onChange={(e) => (newPost.count = e.target.value)}
                  />
                  <input
                    placeholder="height..."
                    className="form-control"
                    onChange={(e) => (newPost.size.height = e.target.value)}
                  />
                  <input
                    placeholder="width..."
                    className="form-control"
                    onChange={(e) => (newPost.size.width = e.target.value)}
                  />
                  <input
                    placeholder="weight..."
                    className="form-control"
                    onChange={(e) => (newPost.weight = e.target.value)}
                  />
                  <input
                    placeholder="Price..."
                    className="form-control"
                    onChange={(e) => (newPost.price = e.target.value)}
                  />
                </div>
                <textarea
                  style={{ height: 100 }}
                  className="form-control"
                  placeholder="description here..."
                  onChange={(e) => (newPost.description = e.target.value)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Close
              </button>
              <button
                onClick={() =>
                  dispatch({ type: actions.CREATE_POST, payload: newPost })
                }
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
