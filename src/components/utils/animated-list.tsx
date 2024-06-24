import React from "react";

const resortList = [
  {
    id: "1",
    title: "Sunny Beach Resort",
    location: "Malibu, California",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Mountain Serenity Lodge",
    location: "Aspen, Colorado",
    rating: 4.7,
  },
  {
    id: "3",
    title: "Tropical Rainforest Retreat",
    location: "Amazon, Brazil",
    rating: 4.9,
  },
  {
    id: "4",
    title: "Crystal Lake Resort",
    location: "Lake Tahoe, Nevada",
    rating: 4.6,
  },
  {
    id: "5",
    title: "Desert Oasis Hotel",
    location: "Dubai, UAE",
    rating: 4.5,
  },
  {
    id: "6",
    title: "Island Paradise Resort",
    location: "Bora Bora, French Polynesia",
    rating: 4.9,
  },
  {
    id: "7",
    title: "Mystic Forest Lodge",
    location: "Black Forest, Germany",
    rating: 4.7,
  },
  {
    id: "8",
    title: "Canyon Cliffside Resort",
    location: "Grand Canyon, Arizona",
    rating: 4.6,
  },
  {
    id: "9",
    title: "Arctic Glacial Hotel",
    location: "Reykjavik, Iceland",
    rating: 4.8,
  },
  {
    id: "10",
    title: "Volcanic Springs Resort",
    location: "Hawaii, USA",
    rating: 4.9,
  },
];

const ResortList = () => {
  return (
    <div className="mt-16 mb-20 divide-y-2 divide-black">
        {resortList.map(({ id, title, location, rating }) => (
          <div key={id}  className="flex justify-between w-full py-6 text-left">
            <span className="w-[10rem] sm:w-[20rem] md:text-xl lg:text-2xl">{title}</span>
            <span className="w-[8rem] sm:w-[20rem] md:text-lg lg:text-xl text-right md:text-left"> {location}</span>
            <span className="hidden md:block mr-10 md:text-base lg:text-lg">{rating} ⭐</span>
          </div>
        ))}
    </div>
  );
};

export default ResortList;
