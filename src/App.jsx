import React from "react";
import Nav from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";
import data from "../data.js";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <>
      <Nav />
      <section className="cards-container">{cards}</section>
    </>
  );
}
