import React from "react";
import { Link } from "react-router-dom";
import Book1 from '../../assets/book1.png';
import Book2 from '../../assets/book2.png';
import Book3 from '../../assets/book3.png';
import Book4 from '../../assets/book4.png';

function CardsRowHome() {
  return (
    <div className="container m-auto py-16">
      <p className="text-h1 font-semibold text-center text-[#656A70]">Produtos em destaque</p>
      <div className="text-center w-10/12 m-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row">
        <div className="flex flex-col m-auto">
          <Link to={"/catalogo"}>
            <img className="m-auto relative top-[55px] hover:scale-105 transition-transform" src={Book1} alt="book" />
          </Link>
        </div>
        <div className="flex flex-col m-auto">
          <Link to={"/catalogo"}>
            <img className="m-auto relative top-[55px] hover:scale-110 transition-transform" src={Book2} alt="book" />
          </Link>
        </div>
        <div className="flex flex-col m-auto">
          <Link to={"/catalogo"}>
            <img className="m-auto relative top-[55px] hover:scale-110 transition-transform" src={Book3} alt="book" />
          </Link>
        </div>
        <div className="flex flex-col m-auto">
          <Link to={"/catalogo"}>
            <img className="m-auto relative top-[55px] hover:scale-110 transition-transform" src={Book4} alt="book" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardsRowHome;