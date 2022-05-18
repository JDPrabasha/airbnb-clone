import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in New York
          </h1>
          <div className="hidden text-gray-800 whitespace-nowrap lg:inline-flex mb-5 space-x-3">
            {[
              "Cancellation Flexibility",
              "Type of Place",
              "Price",
              "Rooms and Beds",
              "More filters",
            ].map((item) => (
              <p className="px-4 py-2 border cursor-pointer active:scale-95 active:bg-gray-100 transition duration-100 transform ease-out rounded-full hover:shadow-lg">
                {item}
              </p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
