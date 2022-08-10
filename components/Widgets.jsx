import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Widgets() {
  return (
    <div className="xl:w-[600px] hidden lg:inline">
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
    </div>
  );
}

export default Widgets;
