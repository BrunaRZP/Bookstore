import Header from "../../components/Header";
import Box from "../../components/Box";
import Footer from "../../components/Footer";

function Home() {

return (    
    <div className="App">
      <Header />

      <main>

      <Box section="banner">

        <div>
        
        <h1>Conteúdo da página</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam veniam facere corporis delectus 
            eaque suscipit possimus dolore? Consequuntur reiciendis odio nam est cumque sunt, dignissimos animi corrupti 
            reprehenderit, ad repellendus, quae vitae dicta necessitatibus non! Enim eveniet ipsa fugiat.
        </p>
        </div>

      </Box>
        
      </main>

      <Footer />

    </div>
);
}

export default Home;