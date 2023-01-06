import { useRef, useEffect } from "react";
import img from "../../images/bike-2x.jpg";
import "./whatWeDo.css";

const WhatWeDo = () => {
  console.log("yes");
  const imagesBlock = useRef();

  const handleImageClick = (event) => {
    const imagesArray = Array.from(imagesBlock.current.children);
    const img_id = event.target.id;

    imagesArray.forEach((element) => {
      if (element.id === img_id) element.classList.add("extend");
      else element.classList.remove("extend");
    });
  };

  return (
    <section className="what_we_do">
      <h1 className="heading">What we do</h1>
      <div className="container grid">
        <div className="text">
          <div>
            <strong>RentEasy</strong> has only one aim is to provide the best
            and genuine homes and bikes at affordable rentals. And we also try
            to bring so many varities of items. <br />
            We are giving our best to eliminate all troubles that a person face
            while finding a house which feels like a home. <br />
            <span>To view image click over that</span>
          </div>
        </div>
        <div ref={imagesBlock} className="images">
          <div
            onClick={handleImageClick}
            className="image image-1 extend"
            id="img_1"
          ></div>
          <div
            onClick={handleImageClick}
            className="image image-2"
            id="img_2"
          ></div>
          <div
            onClick={handleImageClick}
            className="image image-3"
            id="img_3"
          ></div>
          <div
            onClick={handleImageClick}
            className="image image-4"
            id="img-4"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
