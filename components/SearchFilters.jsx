import { useEffect, useState } from "react";
import { Select, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

export default function SearchFilters() {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="bg-gray-100 p-4 flex justify-center flex-wrap">
      {filters?.map((filter) => (
        <div key={filter.queryName}>
          <Select
            className="p-2 w-48"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
      ))}
      <div className="flex flex-col">
        <button
          className="border bg-white flex items-center justify-center w-[140px] h-[40px] border-gray-200  "
          onClick={() => setShowLocations(!showLocations)}
        >
          Search Location
        </button>
        {showLocations && (
          <div className="flex flex-col relative pt-2">
            <input
              className="w-[300px] py-1 focus:border-gray-300"
              placeholder="Type Here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <MdCancel
                className="absolute text-lg cursor-pointer right-5 top-3 z-20"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <div className="h-[300px] overflow-auto">
                {locationData?.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <p className="cursor-pointer bg-gray-200 p-2 border-b border-gray-100">
                      {location.name}
                    </p>
                  </div>
                ))}
                {!loading && !locationData?.length && (
                  <div className="flex items-center justify-center flex-col mt-5 mb-5">
                    <Image src={noresult} alt="" />
                    <p className=" text-xl mt-3">Waiting to search!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
