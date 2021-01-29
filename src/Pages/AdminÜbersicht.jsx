import Navbar from ".././Components/Navbar/Navbar";
import Footer from ".././Components/Footer/Footer";
import aUebersicht from ".././Components/AdminÜbersichtsSeite/aÜbersicht";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";


//import { Link } from "react-router-dom";

const AdminÜbersicht = () => {
  return (
    <div className="App">
      <Navbar />

      <aUebersicht />

      <Footer />
    </div>
  );
};

export default AdminÜbersicht;