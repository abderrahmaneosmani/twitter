import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";

function Posts({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* Image */}
      <img
        src={post.userImg}
        alt="user"
        className="h-11 w-11 rounded-full mr-4"
      />
      {/* Right side  */}
      <div>
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex space-x-1  items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[16px] hover:underline">
              @{post.username}
            </span>
            <span>{post.timestamp}</span>
          </div>
          {/* Icon */}
          <DotsHorizontalIcon className="h-10 w-10  hoverEffect hover:bg-sky-100" />
        </div>
        {/* Post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* image */}
        <img className="rounded-2xl mr-2" src={post.img} alt="" />

        {/* Icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9  w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9  w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9  w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}

export default Posts;
