import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/98.jpg";
import Img2 from "../../assets/places/phnom penh.jpg";
import Img3 from "../../assets/places/koh-rong-island-cambodia.jpg";
import Img4 from "../../assets/places/battambang.jpg";
import Img5 from "../../assets/places/99.jpg";
import Img6 from "../../assets/places/Kep.jpg";
import Img7 from "../../assets/places/100.jpg";
import Img8 from "../../assets/places/101.jpg";
import Img9 from "../../assets/places/bousrawaterfall.jpg";
import Img10 from "../../assets/places/koh sdach.jpg";
import Img11 from "../../assets/places/lake yeak laom.jpg";
import Img12 from "../../assets/places/BokorMountainKampotCambodia.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Angkor Wat",
    location: "Cambodia",
    description:
      "The magnificent Angkor Wat is a UNESCO World Heritage site and the largest religious monument in the world. It is known for its stunning architecture and intricate carvings.",
    price: 250,
    type: "Cultural Adventure",
  },
  {
    img: Img2,
    title: "Phnom Penh",
    location: "Cambodia",
    description:
      "Phnom Penh, Cambodia's capital, is home to iconic landmarks like the Royal Palace, Silver Pagoda, and the Tuol Sleng Genocide Museum.",
    price: 150,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Koh Rong",
    location: "Cambodia",
    description:
      "Koh Rong is a tropical paradise offering pristine white-sand beaches, turquoise waters, and a relaxing island vibe.",
    price: 200,
    type: "Beach Getaway",
  },
  {
    img: Img4,
    title: "Battambang",
    location: "Cambodia",
    description:
      "Battambang is known for its colonial charm, bamboo train rides, and beautiful temples like Wat Banan.",
    price: 210,
    type: "Cultural Experience",
  },
  {
    img: Img5,
    title: "Tonle Sap Lake",
    location: "Cambodia",
    description:
      "Experience life on the water at Tonle Sap Lake, where you can explore floating villages and stilted homes.",
    price: 150,
    type: "Eco Adventure",
  },
  {
    img: Img6,
    title: "Kep",
    location: "Cambodia",
    description:
      "The coastal town of Kep is known for its fresh seafood, relaxing beaches, and nearby Rabbit Island (Koh Tonsay).",
    price: 210,
    type: "Coastal Retreat",
  },
  {
    img: Img7,
    title: "DoungTE",
    location: "Cambodia",
    description:
      "Doung Te the popular water park in Kampot Province, there is a good place to have nice swimming and enjoying the nature surrounding by Coconut tree.",
    price: 250,
    type: "Eco Adventure",
    
  },
  {
    img: Img8,
    title: "kirirom national park",
    location: "Cambodia",
    description:
      "Kirirom National Park is on Kirirom Mountain located in Kampong Speu Province Cambodia..",
    price: 125,
    type: "National park",
  },
  {
    img: Img9,
    title: "Bousra waterfall",
    location: "Cambodia",
    description:
      " One of the most beautiful water falls in Cambodia. Big space, area to rest, meet with family and friends, good parking..",
    price: 250,
    type: "Waterfall",
  },
  {
    img: Img10,
    title: "Koh sdach",
    location: "Cambodia",
    description:
      "Koh Sdech features a long beach, and the sea is filled with a variety of fish. ",
    price: 250,
    type: " A fishing village island with a long beach",
  },
  {
    img: Img11,
    title: " yeak laom Lake",
    location: "Cambodia",
    description:
      "Lake Yeak Laom is a volcanic crater lake and a tourist destination in the commune of Yeak Laom, Banlung Municipality, Ratanakiri Province, in north-eastern Cambodai..", 
    price: 250,
    type: " crater lake",
  },
  {
    img: Img12,
    title: "Bokor Moutain",
    location: "Cambodia ",
    description:
      "Bokor Mountain is a mountain in Preah Monivong National Park in southern Cambodia, and is known for its French colonial buildings, scenic views, and natural wonders..", 
    price: 200,
    type: " Elephant Mountains ",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
