import Navbarr from "./components/Navbar/Navbar";
import './App.css'
import BannerCarousel from "./components/bannerCarousel/BannerCarousel";
import { Container } from "react-bootstrap";
import CardWeblog from "./components/CardWeblogs/cardWeblog";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
function App() {
  const router=useRoutes(routes)
  return (
    <>

      <Navbarr/>
      <div style={{backgroundColor:'#1D1E1F'}}>
      {router }
      </div>
    <Footer/>
      
    </>
  );
}

export default App;
