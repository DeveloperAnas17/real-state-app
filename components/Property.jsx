import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

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
    <div className="flex flex-wrap pt-0 justify-start cursor-pointer p-5 overflow-hidden max-w-[440px]">
      <div>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          alt=""
          width={400}
          height={260}
        />
      </div>
      <div className="w-full">
        <div className="flex pt-2 items-center justify-between">
          <div className="flex items-center">
            <div className="pr-3 text-green-400">
              {isVerified && <GoVerified />}
            </div>
            <h2 className="font-bold text-lg">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </h2>
          </div>
          <div>
            <Image
              src={agency?.logo?.url}
              alt=""
              width={80}
              height={80}
              objectFit="contain"
              className="  "
            />
          </div>
        </div>
        <div className="flex items-center p-1 justify-between w-[250px] text-blue-4000">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <h1 className="text-lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </h1>
      </div>
    </div>
  </Link>
);

export default Property;
