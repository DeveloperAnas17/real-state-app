import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { Avatar } from "@mui/material";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="flex  flex-wrap pt-0 justify-start cursor-pointer bg-white  overflow-hidden max-w-[400px] border rounded-2xl shadow-sm">
      <div>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          alt=""
          width={400}
          height={260}
          className="w-full transition-transform duration-200 hover:scale-105 ease-in "
        />
      </div>
      <div className=" w-full ">
        <div className="flex pt-3 px-3 items-center justify-between">
          <div className="flex items-center">
            <div className="pr-3 text-green-400">
              {isVerified && <GoVerified />}
            </div>
            <h2 className="font-semibold lg:font-bold  lg:text-lg">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </h2>
          </div>
          <div>
            <Avatar
              src={agency?.logo?.url}
              className="w-12 h-12 rounded-full border border-gray-500 "
            />
          </div>
        </div>

        <h1 className="text-sm pt-1 mb-1 px-3">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </h1>
        <div className="flex mt-1 items-center p-3 justify-between w-full text-blue-4000 border-t border-gray-300 ">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
      </div>
    </div>
  </Link>
);

export default Property;
