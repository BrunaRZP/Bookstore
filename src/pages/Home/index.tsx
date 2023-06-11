import BannersHome from "../../components/BannersHome";
import CarouselHome from "../../components/CarouselHome";
import CardsRowHome from "../../components/CardsRowHome";
import Authors from "../../components/Authors";
import NavbarNavigation from "../../components/Navbar/NavbarNavigatio";

function Home() {
  return (
    <div>
      <NavbarNavigation />
      <CarouselHome />
      <BannersHome />
      <CardsRowHome />
      <Authors />
    </div>
  );
}

export default Home