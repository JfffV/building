import React from "react";
import "./Our_works.css";
import { useState } from "react";

export default function Our_works() {
  const [works, setWorks] = useState([
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
    {
      title: "Home in Belgrad ",
      img: "img/homepage.jpg",
    },
  ]);

  return (
    <div className="containers">
      {works.map((work) => (
        <div className="works_container">
          <img className="works_photoes" src={work.img} />
          <h1 className="works_title"> {work.title}</h1>
        </div>
      ))}
    </div>
  );
}
