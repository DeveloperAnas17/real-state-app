import { useRef, useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function ImageSrollbar({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const timeOut = useRef(null);
  console.log(data);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="h-full w-full items-center justify-center object-cover">
        {data.map((item, index) => (
          <div className="" key={item.id}>
            {index === current && (
              <Image
                className="w-full h-[300px]"
                src={item.url}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        ))}
      </div>
      <div className="sliderButton absolute bottom-14 flex  right-14 space-x-3 ">
        <FaArrowAltCircleLeft
          className="w-12 h-12 text-black rounded-full p-2 cursor-pointer border-2 border-black select-none hover:bg-blue-500 hover:text-white hover:border-blue-500 transition hover:scale-105 duration-200 ease-out "
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="w-12 h-12 text-black rounded-full p-2  cursor-pointer border-2 border-black select-none hover:bg-blue-500 hover:text-white hover:border-blue-500 transition hover:scale-105 duration-200 ease-out"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
