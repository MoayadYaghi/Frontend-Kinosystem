import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import aUebersicht2 from "../Components/AdminUebersichtsSeite/aUebersicht2";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";


//import { Link } from "react-router-dom";

const AdminUebersicht = () => {
  return (
    <div className="App">
      <Navbar />

      
      <aUebersicht2 />

      <Footer />
    </div>
  );
};

export default AdminUebersicht;