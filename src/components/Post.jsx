import React from "react";

import PostModal from "./PostModal";



function Post({ post }) {
 
  return (
    <div
      className="card col-xl-3 col-lg-4 col-md-6 col-sm-12"
    
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
     <PostModal post={post}/>
    </div>
  );
}
export default Post;
