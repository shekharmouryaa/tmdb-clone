import "./App.css";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Navbar from "./components/Navbar";
import MainRoutes from "./Router/Routes";

function App() {
  return (
    <>
      <Navbar />
      <HomeContent/>
      <MainRoutes/>
      <Footer/>
      </>
  );
}
export default App;
