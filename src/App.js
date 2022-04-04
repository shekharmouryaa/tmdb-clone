import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
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
