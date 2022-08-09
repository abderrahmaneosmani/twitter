import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";

function Feed() {
  return (
    <div className="xl:ml-[375px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">home</h2>
        <div className="hoverEffect items-center justify-center ml-auto w-9  h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
