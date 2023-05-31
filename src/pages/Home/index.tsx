import BannersHome from "../../components/BannersHome";
import CarouselHome from "../../components/CarouselHome";
import CardsRowHome from "../../components/CardsRowHome";
import Authors from "../../components/Authors";

function Home() {
  return (
    <div>
      <CarouselHome />
      <BannersHome />
      <CardsRowHome />
      <Authors />
    </div>
  );
}

export default Home