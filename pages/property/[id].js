import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <div className="max-w-6xl mx-auto p-4">
    {photos && <ImageScrollbar data={photos} />}
    <div className="w-full p-6">
      <div className="flex pt-2 items-center">
        <div className="pr-3 text-green-400">
          {isVerified && <GoVerified />}
        </div>
        <h1 className="text-lg font-bold">
          AED {price} {rentFrequency && `/${rentFrequency}`}
        </h1>
        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
      </div>
      <div className="flex items-center p-1 justify-between w-[250px] text-blue-400">
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </div>
    </div>
    <div className="mt-2">
      <h1 className="text-lg mb-2 font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="flex flex-wrap uppercase justify-between">
      <div className="flex justify-between w-[400px] border-b-2 p-3">
        <span>Type</span>
        <h2 className="font-bold ">{type}</h2>
      </div>
      <div div className="flex justify-between w-[400px] border-b p-3">
        <span>Purpose</span>
        <h2 className="font-bold ">{purpose}</h2>
      </div>
      {furnishingStatus && (
        <div className="flex justify-between w-[400px] border-b p-3">
          <h2>Furnishing Status</h2>
          <h1 className="font-bold">{furnishingStatus}</h1>
        </div>
      )}
    </div>
    <div>
      {amenities.length && (
        <div className="text-2xl font-bold text-black mt-5">Facilites:</div>
      )}
      <div className="flex flex-wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <div
              className="font-bold text-blue-400 bg-gray-200 text-lg rounded-lg m-1 p-2"
              key={amenity.text}
            >
              {amenity.text}
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
