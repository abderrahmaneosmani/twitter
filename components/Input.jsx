import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

function Input() {
  return (
    <div className="flex border-b border-gray-200 space-x3 p-3">
      <img
        src="https://images.unsplash.com/file-1656361016116-55e06cbfced9image"
        className="h-11 w-11 rounded-full"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wider min-h-[50px] text-gray-700"
            rows="2"
            placeholder="whats happening ?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500" />
          </div>

          <button
            disabled
            className="bg-blue-400 text-white py-1.5 rounded-full font-b old shadow-md px-4 disabled:opacity-50 hover:brightness-90"
          >
            tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
