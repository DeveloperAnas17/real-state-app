import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <div className="flex p-2 border-b-8 justify-between items-center">
    <div className="text-3xl text-blue-400 font-bold">
      <Link href="/" paddingLeft="2">
        Realtor
      </Link>
    </div>
    <div className="">
      <ul className="hidden sm:flex items-center space-x-6 md:space-x-14">
        <Link href="/" passHref>
          <li className="flex items-center font-medium cursor-pointer">
            <FcHome className="mx-1" /> Home
          </li>
        </Link>
        <Link href="/search" passHref>
          <li className="flex items-center cursor-pointer">
            <BsSearch className="mx-1" /> Seach
          </li>
        </Link>
        <Link href="/search?purpose=for-sale" passHref>
          <li className="flex items-center cursor-pointer ">
            <FcAbout className="mx-1" /> Buy Property
          </li>
        </Link>
        <Link href="/search?purpose=for-rent" passHref>
          <li className="flex items-center cursor-pointer  ">
            <FiKey className="mx-1" /> Rent Property
          </li>
        </Link>
      </ul>
      <FcMenu className="sm:hidden" />
    </div>
  </div>
);

export default Navbar;
