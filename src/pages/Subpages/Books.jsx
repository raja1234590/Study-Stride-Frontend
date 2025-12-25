import React from "react";
import "./Books.css";

const books = [
  { title: "EAMCET Book 1", link: "https://amzn.to/4mk3xHi", image: "/images/slider1.jpg" },
  { title: "EAMCET Book 2", link: "https://amzn.to/4oFJxR7", image: "/images/slider2.jpg" },
  { title: "EAMCET Book 3", link: "https://amzn.to/3JdnMbj", image: "/images/slider3.jpg" },
  { title: "EAMCET Book 4", link: "https://amzn.to/470iny4", image: "/images/slider1.jpg" },
  { title: "EAMCET Book 5", link: "https://amzn.to/4lCmowd", image: "/images/slider2.jpg" },
  { title: "EAMCET Book 6", link: "https://amzn.to/45D29Z8", image: "/images/slider3.jpg" },
  { title: "EAMCET Book 7", link: "https://amzn.to/4lzzx9g", image: "/images/slider1.jpg" },
  { title: "EAMCET Book 8", link: "https://amzn.to/4mP8Q1n", image: "/images/slider2.jpg" },
];

function Books() {
  return (
    <div className="books-container">
      <h2>EAMCET Books</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-img" />
            <p>{book.title}</p>
            <a href={book.link} target="_blank" rel="noopener noreferrer" className="buy-btn">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
