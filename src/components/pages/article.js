import React from "react";
import "../../scss/blog.scss";

const Article = ({ articleInfo }) => {
  return (
    <>
      <div className="wrapper blog">
        {articleInfo.map((currentValue, index) => {
          return index % 2 !== 0 ? (
            <div className="d-center reverse">
              <div>
                <img src={currentValue.img} alt="" />
              </div>
              <div className="test">
                <div>{currentValue.title}</div>
                <div>{currentValue.contents}</div>
              </div>
            </div>
          ) : (
            <div className="d-center">
              <div>
                <img src={currentValue.img} alt="" />
              </div>
              <div>
                <div>{currentValue.title}</div>
                <div>{currentValue.contents}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Article;
