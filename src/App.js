import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./Router/Routes";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes/>
      <Footer/>
      </>
  );
}
export default App;
