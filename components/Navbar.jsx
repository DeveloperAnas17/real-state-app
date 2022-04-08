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
      <ul className="hidden sm:flex items-center space-x-14">
        <li className="">Home</li>
        <li className="">Home</li>
        <li className="">Home</li>
        <li className="">Home</li>
      </ul>
      <FcMenu className="sm:hidden" />
    </div>
  </div>
);

export default Navbar;
