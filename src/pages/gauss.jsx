import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

// buat style untuk map container
const mapStyle = {
  width: "100%",
  height: "500px",
};

function Gauss() {
  useEffect(() => {
    const map = L.map("mapid").setView([0, 0], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    const marker = L.marker([-6.1753924, 106.8271528]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <h1 className="font-inter text-[2rem] text-center py-[50px]">
        peta output Gauss
      </h1>
      <div className="w-[90%] mx-auto rounded-[10px]">
        <div id="mapid" className="w-[50%] mx-auto" style={mapStyle}></div>
      </div>
      <Link
        to="/"
        className="py-[50px] text-center mx-auto w-fit block text-blue-400"
      >
        kembali ke homepage
      </Link>
    </div>
  );
}

export default Gauss;
