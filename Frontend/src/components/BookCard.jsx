import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-10 hover:scale-105 duration-200">
      <figure>
        <img
          src={book?.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body shadow-lg">
        <h2 className="card-title">
          {book?.name}
          <div className="badge badge-secondary">{book?.category || '-'}</div>
        </h2>
        <p>{book?.title}</p>
        <div className="card-actions items-center justify-between">
          <div className="badge badge-outline">${book?.price}</div>
          <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white p-3">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
