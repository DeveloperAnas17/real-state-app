import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import React, { useState, useRef, Fragment } from "react";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Search",
    path: "/search",
  },
  {
    display: "Buy Property",
    path: "/search?purpose=for-sale",
  },
  {
    display: "Rent Property",
    path: "/search?purpose=for-rent",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { pathname } = useRouter();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const activeStyle = "text-red-600 transition duration-150 ease-in";
  return (
    <Fragment>
      <div
        className="bg-white shadow-md sticky top-0 left-0 right-0 z-10 flex justify-between  items-center h-20 w-full transition duration-200 ease-in-out  mx-auto px-4 text-gray-800"
        ref={headerRef}
      >
        <div className="">
          <div className="flex items-center">
            <Link href={"/"} passHref>
              <Image
                className="cursor-pointer"
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                objectFit="contain"
              />
            </Link>
          </div>
        </div>
        <ul className=" hidden md:flex items-center justify-end  space-x-14">
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`font-medium text-lg text-gray-800 ${
                i === active ? activeStyle : ""
              } hover:text-violet-600 transition duration-150 ease-in-out`}
            >
              <Link href={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block text-white md:hidden">
          {nav ? (
            <RiCloseFill className="text-violet-600 cursor-pointer" size={20} />
          ) : (
            <FcMenu className="text-white  cursor-pointer" size={20} />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-white text-gray-800 md:hidden ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex items-center ">
            <Link href={"/"} passHref>
              <Image
                className="cursor-pointer"
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                objectFit="contain"
              />
            </Link>
          </div>
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`font-medium mt-5 text-gray-800 border-b px-6 py-3 ${
                i === active ? activeStyle : ""
              } hover:text-violet-600 transition duration-150 ease-in-out`}
            >
              <Link href={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
