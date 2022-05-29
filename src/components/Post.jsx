import React, { useState,setState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useDispatch } from "react-redux";
import actions from "../redux/reducers/actions";
import { margin } from "@mui/system";

function Post({ post }) {
  const [isOpen, changeIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openDialog = () => changeIsOpen(true);
  const closeDialog = () => changeIsOpen(false);

  return (
    <div
      className="card col-xl-3 col-lg-4 col-md-6 col-sm-12"
      onClick={openDialog}
    >
      <img src={post.image} className="card-img-top" alt={post.id} />
      <div className="card-body">
        <div className="card-title">
          {post.title}
          <div>Price:{post.price}$</div>
        </div>
        <div className="card-text">
          <div className="description">Description: {post.description}</div>

          <div>Weight:{post.weight}kg</div>
          <div>
            Size h-{post.size.height} w-{post.size.width}
          </div>
          <div>Count: {post.count < 1 ? "not available" : post.count}</div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={closeDialog} post={post}>
        <DialogTitle id="dialog-title">{post.title}</DialogTitle>
        <DialogContent>
          <img style={{ height: 450 }} src={post.image} />
          <div>price:{post.price}$</div>
          <div>
            w-{post.size.width}
            h-{post.size.height}
          </div>
          <div>weight:{post.weight}</div>
          <div>description:{post.description}</div>
          <div>count:{post.count}</div>
        </DialogContent>
        <DialogActions>
          <span className="dialog-span">click escape to close</span>
          <button
            onClick={() =>
              dispatch({ type: actions.DELETE_DATA, payload: post.id })
            }
          >
            delete
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Post;
