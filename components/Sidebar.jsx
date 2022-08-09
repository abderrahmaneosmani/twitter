import Image from "next/image";
import React from "react";
import SideBarMenuItems from "./SideBarMenuItems";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  InboxIcon,
  HashtagIcon,
  InboxInIcon,
  UserIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1}">
        <Image
          src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
          width="40px"
          height="40px"
          alt="twitter"
        />
      </div>

      {/* Menu  */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItems text="Home" Icon={HomeIcon} active />
        <SideBarMenuItems text="Explore" Icon={HashtagIcon} />
        <SideBarMenuItems text="Notification" Icon={BellIcon} />
        <SideBarMenuItems text="Messages" Icon={InboxIcon} />
        <SideBarMenuItems text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarMenuItems text="Lists" Icon={ClipboardIcon} />
        <SideBarMenuItems text="Profile" Icon={UserIcon} />
        <SideBarMenuItems text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/*Button */}
      <div>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md text-lg hidden xl:inline">
          Tweet
        </button>
      </div>

      {/* Mini profile */}
      <div className="hoverEffect flex items-center justify-center xl:justify-start xl:items-center mt-auto">
        <Image
          className="rounded-full w-10 h-10 xl:mr-2"
          src="https://images.unsplash.com/file-1656361016116-55e06cbfced9image"
          alt=""
          height="60px"
          width="60px"
        />
        <div className="leading-5">
          <h4 className="font-bold">osmani abderrahmane</h4>
          <p className="text-gray-500"> @osmabderra</p>
        </div>
        <div>
          <DotsHorizontalIcon className="h-4 xl:ml-8" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
