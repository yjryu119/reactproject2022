import React from "react";
import Article from "././article";
import "../../scss/blog.scss";

const Blog = ({ articleInfo }) => {
  return (
    <>
      <Article articleInfoData={articleInfo}></Article>
    </>
  );
};

export default Blog;
