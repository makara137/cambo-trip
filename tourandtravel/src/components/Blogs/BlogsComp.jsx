import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/98.jpg";
import Img2 from "../../assets/places/phnom penh.jpg";
import Img3 from "../../assets/places/koh-rong-island-cambodia.jpg";
import Img4 from "../../assets/places/battambang.jpg";
import Img5 from "../../assets/places/99.jpg";
import Img6 from "../../assets/places/Kep.jpg";
import Img7 from "../../assets/places/100.jpg";
import Img8 from "../../assets/places/101.jpg";
import Img9 from "../../assets/places/koh sdach.jpg";
import Img10 from "../../assets/places/lake yeak laom.jpg";
import Img11 from "../../assets/places/BokorMountainKampotCambodia.jpg";
import Img12 from "../../assets/places/bousrawaterfall.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Angkor Wat: The Jewel of Cambodia",
    description:
      "Angkor Wat is the crown jewel of Cambodia, a sprawling temple complex that serves as a symbol of the country's rich cultural and spiritual heritage. As the largest religious monument in the world, it boasts intricate carvings and breathtaking architecture. Watching the sunrise over Angkor Wat is a once-in-a-lifetime experience that draws travelers from across the globe.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Phnom Penh: The Heart of Cambodia",
    description:
      "Phnom Penh, the vibrant capital city of Cambodia, offers a mix of historic landmarks and modern attractions. Visit the Royal Palace and Silver Pagoda to admire their ornate beauty. Reflect on Cambodia's past at the Tuol Sleng Genocide Museum and Choeung Ek Killing Fields. The bustling riverside promenade is perfect for evening strolls and sampling local delicacies.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Koh Rong: Cambodia's Island Paradise",
    description:
      "Koh Rong is a slice of paradise located off the coast of Cambodia. Known for its pristine white-sand beaches and crystal-clear waters, the island is perfect for relaxation and adventure alike. Whether you're snorkeling, diving, or simply enjoying the sunset, Koh Rong offers an unforgettable escape from the hustle and bustle of everyday life.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 4,
    image: Img4,
    title: "Battambang: A Cultural Gem",
    description:
      "Battambang is a charming town known for its colonial architecture and artistic heritage. Take a ride on the famous bamboo train, visit ancient temples like Wat Banan, and explore the town's thriving arts scene. Battambang provides a glimpse into Cambodia's rural beauty and cultural richness.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 5,
    image: Img5,
    title: "Tonle Sap Lake: Life on the Water",
    description:
      "Tonle Sap Lake, Southeast Asia's largest freshwater lake, is a vital source of life for many Cambodians. Explore its floating villages to see stilted homes, floating markets, and fishing communities. A boat ride on this lake offers a unique opportunity to witness the harmonious relationship between the people and their environment.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 6,
    image: Img6,
    title: "Kep: Cambodia's Coastal Retreat",
    description:
      "Kep, a tranquil coastal town, is famed for its fresh seafood, especially the renowned Kep crab. Relax on Kep Beach, explore the nearby Kep National Park with its scenic trails, or take a short boat ride to Rabbit Island (Koh Tonsay) for a peaceful getaway. Kep's laid-back charm and natural beauty make it a must-visit destination.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 7,
    image: Img7,
    title: "DoungTe:River Water Park, with giant water slide, kayaks, speedboat, tour boat, paddle boats ",
    description:
      "Doung Te the popular water park in Kampot Province, there is a good place to have niceswimming and enjoying the nature surrounding by Coconut tree.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 8,
    image: Img8,
    title: "Kirirom National Park is on Kirirom Mountain located in Kampong Speu Province Cambodia. ",
    description:
      "The word Kirirom in Khmer translates to Happy Mountain. The Cambodian King Monivong gave the name to the country's first designated national park..",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 9,
    image: Img9,
    title: "Koh Sdach is a Cambodian island. ",
    description:
      "Koh Sdech features a long beach, and the sea is filled with a variety of fish.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 10,
    image: Img10,
    title: "Lake Yeak Laom is a volcanic crater lake and a tourist destination in the commune of Yeak Laom ",
    description:
      "Lake Yeak Laom is a volcanic crater lake and a tourist destination in the commune of Yeak Laom, Banlung Municipality, Ratanakiri Province, in north-eastern Cambodai.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 11,
    image: Img11,
    title: "Bokor Mountain is in the Bokor National Park and can be accessed by following the twisty road up through the park. ",
    description:
      "Bokor Mountain is a mountain in Preah Monivong National Park in southern Cambodia, and is known for its French colonial buildings, scenic views, and natural wonders.",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
  {
    id: 12,
    image: Img12,
    title: "The Bousra Waterfall is conveniently sited in Village.",
    description:
      "One of the most beautiful water falls in Cambodia. Big space, area to rest, meet with family and friends, good parking..",
    author: "Travel Enthusiast",
    date: "December 21, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
