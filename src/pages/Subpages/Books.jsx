import React from "react";
import "./Books.css";

const books = [
  { title: "MPC PYQ Book upto 2020(AP)", link: "https://amzn.to/4mk3xHi", image: "/images/slider1.jpg" },
  { title: "Chapter wise chemistry PYQ", link: "https://amzn.to/4oFJxR7", image: "/images/slider2.jpg" },
  { title: "Arihant Mathematics hand book", link: "https://amzn.to/3JdnMbj", image: "/images/slider3.jpg" },
  { title: "Arihant Physics hand book", link: "https://amzn.to/470iny4", image: "/images/slider1.jpg" },
  { title: "R Gupta Pocket chemistry book", link: "https://amzn.to/4lCmowd", image: "/images/slider2.jpg" },
  { title: "MTG Learning Media Link(ALL books for competitive exams)", link: "https://amzn.to/45D29Z8", image: "/images/slider3.jpg" },
  { title: "Arihant Chemsitry hand book", link: "https://amzn.to/4lzzx9g", image: "/images/slider1.jpg" },
  { title: "MPC PYQ BOOK upto 2020(TS) ", link: "https://amzn.to/4mP8Q1n", image: "/images/slider2.jpg" },
];

function Books() {
  return (
    <div className="books-container">
      <h2>PREPARATION Books</h2>
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
