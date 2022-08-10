import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import News from "./News";

function Widgets({ newResults }) {
  const [articleNum, setArticleNum] = useState(3);

  const handleShowMore = () => setArticleNum(articleNum + 3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8  space-x-2">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white z-50 py-1.5">
        <div className="flex items-center p-3 rounded-full bg-red-200 relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700"
            type="text"
            placeholder="search on twitter"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl w-[90%]  xl:w-[75% ]">
        <h4 className="font-bold text-xl px-4">Whats happening ?</h4>
      </div>
      {newResults.slice(0, articleNum).map((article) => (
        <News key={article} article={article} />
      ))}

      <button
        className="text-blue-400 pl-4 pb-3 hover:text-blue-400"
        onClick={handleShowMore}
      >
        Show more
      </button>
    </div>
  );
}

export default Widgets;
