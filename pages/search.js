import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden text-gray-800 whitespace-nowrap lg:inline-flex mb-5 space-x-3">
            {[
              "Cancellation Flexibility",
              "Type of Place",
              "Price",
              "Rooms and Beds",
              "More filters",
            ].map((item) => (
              <p
                key={item}
                className="px-4 py-2 border cursor-pointer active:scale-95 active:bg-gray-100 transition duration-100 transform ease-out rounded-full hover:shadow-lg"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, title, description, star, price, total, location }) => (
                <InfoCard
                  key={img}
                  img={img}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  location={location}
                  title={title}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: { searchResults },
  };
}
