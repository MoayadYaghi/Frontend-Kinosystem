import React, { Component, useEffect, useState } from "react";
import View from "react-native";
import Image from "../../assets/LOGO1.png";
import axios from "axios";
import "Sitzplatzreservierung.css";

// vom Backend
const url = "";

const SitzenPlan = ({ Sitz, UrlHolen }) => {
  // setSeats
  const [sitz, sitzSetzen] = useState([]);

  useEffect(() => {
    async function datenHolen() {
      const anfragen = await axios.get(UrlHolen);
      sitzSetzen(anfragen.data.results);
      return anfragen;
    }
    datenHolen();
  }, [UrlHolen]);

  // console.table(sitz);

  return (
    <div className="Sitz">
      <div className="SitzPlan">
        {sitz.map((sitz) => (
          <img
            className="SitzPlan"
            key={sitz.id}
            src={`${url}${sitz.sitz_path}`}
            alt={sitz} //
          />
        ))}
      </div>
    </div>
  );
};

export default SitzenPlan;
