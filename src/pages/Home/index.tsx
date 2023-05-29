import BannersHome from "../../components/BannersHome";
import CarouselHome from "../../components/CarouselHome";
import CardsRowHome from "../../components/CardsRowHome";
import Authors from "../../components/Authors";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <CarouselHome />
      <BannersHome />
      <CardsRowHome />
      <Authors />
      <Footer />
    </div>
  );
}

export default Home