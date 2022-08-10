import React from "react";

function News({ article }) {
  return (
    <div>
      <a href={article.url} target="_blank">
        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-300">
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">{article.title}</h6>
            <p className="text-xs font-medium text-gray-500">
              {article.source.name}
            </p>
          </div>
          <div>
            <img
              src={article.urlToImage}
              alt=""
              width="70px"
              height="70px"
              className="rounded-xl"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default News;
