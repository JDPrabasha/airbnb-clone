import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="left flex relative h-10 cursor-pointer items-center my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="middle flex items-center rounded-full md:border-2 p-2 md:shadow-sm">
        <input
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 rounded-full bg-red-400 text-white p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>
      <div className="right flex text-gray-500 items-center space-x-4 justify-end">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2  rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
