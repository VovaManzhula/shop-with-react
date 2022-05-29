import React from "react";
import { connect } from "react-redux";
import actions from "../redux/reducers/actions";

import Post from "./Post";

function MainComponent(props) {
  return (
    <div className="container">
      <div className=" row Main-container">
        {props.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: [...state.postReducer.posts]
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dataChange: () => dispatch({ type: actions.DATA_CHANGE })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
