import React from "react";
import Menu from "./components/Menu";
import ToyCard from "./components/ToyCard";

const toys = [
  {
    id: 1,
    name: "Kosedyr",
    description: "Mykt og koselig kosedyr for barn.",
    price: "199 NOK",
  },
  {
    id: 2,
    name: "Byggesett",
    description: "Bygg din egen verden med dette byggesettet.",
    price: "299 NOK",
  },
  {
    id: 3,
    name: "Brettspill",
    description: "Et morsomt brettspill for hele familien.",
    price: "149 NOK",
  },
  {
    id: 4,
    name: "Kreativ sett",
    description: "Lag flotte kunstverk med dette kreative settet.",
    price: "249 NOK",
  },
];

export default function App() {
  return (
    <div className="app">
      <Menu />
      <div className="toy-list">
        {toys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} />
        ))}
      </div>
    </div>
  );
}
