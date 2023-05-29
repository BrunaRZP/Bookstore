import React from "react";
import Banner1 from "../../assets/history.png";
import Banner2 from "../../assets/philosophy.png";
import Banner3 from "../../assets/literature.png";
import Banner4 from "../../assets/spirituality.png";
import Banner5 from "../../assets/politics.png";
import { Link } from "react-router-dom";

function BannersHome() {
  return (
    <div className=" bg-bege-100">
      <h1 className="text-center text-h1 text-[#656A70] font-semibold mt-20">
        Principais categorias
      </h1>
      <div className="w-10/12 gap-4 m-auto py-14 flex flex-col md:flex-row">
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner1} alt="história" className="hover:scale-105 transition-transform" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner2} alt="filosofia" className="hover:scale-105 transition-transform"/>
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner3} alt="literatura" className="hover:scale-105 transition-transform"/>
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner4} alt="espiritualidade" className="hover:scale-105 transition-transform"/>
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner5} alt="política" className="hover:scale-105 transition-transform"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannersHome;
