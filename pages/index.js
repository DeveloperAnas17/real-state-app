import Link from "next/link";
import Image from "next/image";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <div className="flex flex-wrap justify-center items-center m-10">
    <Image src={imageUrl} width={500} height={300} alt="images" />
    <div className="p-5">
      <h5 className="text-gray-500 text-sm font-medium">{purpose}</h5>
      <h1 className="text-3xl font-bold">
        {title1}
        <br />
        {title2}
      </h1>
      <p className="text-lg pt-3 pb-3 text-gray-700">
        {desc1}
        <br />
        {desc2}
      </p>
      <button className="text-xl bg-blue-400 text-white py-1 px-3 cursor-pointer">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </button>
    </div>
  </div>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <div>
    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1=" Explore from Apartments, builder floors, villas"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-8">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
    <Banner
      purpose="BUY A HOME"
      title1=" Find, Buy & Own Your"
      title2="Dream Home"
      desc1=" Explore from Apartments, land, builder floors,"
      desc2=" villas and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-8">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
  </div>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
