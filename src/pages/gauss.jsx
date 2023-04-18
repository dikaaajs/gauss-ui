import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import axios from "axios";
import pin from "../assets/pin.svg";
import { async } from "q";

// buat style untuk map container
const mapStyle = {
  width: "100%",
  height: "500px",
};

function Gauss() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://wild-rose-cod-hem.cyclic.app/lokasi")
      .then((res) => {
        console.log(res.data);
        setState(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (loading || !mapRef.current) return;

    const map = L.map(mapRef.current).setView([0, 0], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    state.map((location) => {
      const { long, lat, pesan } = location;
      const marker = L.marker([Number(lat), Number(long)], {
        icon: L.icon({
          iconUrl: pin,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        }),
      }).addTo(map);
      marker.bindPopup(pesan).openPopup();
    });
    return () => {
      map.remove();
    };
  }, [loading, state]);

  if (loading === true) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1 className="font-inter text-[2rem] text-center py-[50px]">
        peta output Gauss
      </h1>
      <div className="w-[90%] mx-auto rounded-[10px]">
        <div
          id="mapid"
          ref={mapRef}
          className="w-[50%] mx-auto"
          style={mapStyle}
        ></div>
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
