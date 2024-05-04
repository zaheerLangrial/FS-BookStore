import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import List from "../../public/DataList.json";
import Slider from "react-slick";
import BookCard from "./BookCard";
import axios from "axios";

const FreeBook = () => {
  const [books, setBooks] = useState([]);
  // const freeBooks = List?.filter((book) => book?.category === "free") || [];

  const FetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3500/book");
    setBooks(res.data);
    } catch (error) {
      console.log('error' , error)
    }
  };

  useEffect(() => {
    FetchBooks();
  }, []);
  //Slider Sitting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl mx-auto container px-4 md:px-8 lg:px-20">
      <div>
        <h1 className="text-3xl font-semibold pb-2">Free Offered Courses</h1>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          repudiandae alias quis doloremque corporis neque adipisci, vitae
          incidunt.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {books
            ?.filter((book) => book.category === "free")
            .map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
