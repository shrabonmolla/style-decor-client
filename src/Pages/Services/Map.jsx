import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LoaderIcon } from "react-hot-toast";
export default function Map({ serviceCenters }) {
  const position = [23.8041, 90.4152];
  console.log(serviceCenters);
  const mapRef = useRef(null);

  //   handleSearch
  function handleSearch(e) {
    e.preventDefault();
    const location = e.target.location.value;
    const matchedLoacation = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    console.log(matchedLoacation);

    if (matchedLoacation) {
      const coord = [matchedLoacation.latitude, matchedLoacation.longitude];
      mapRef.current.flyTo(coord, 11);
    }
  }
  return (
    <div className="mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center py-6">
        All Our Service Center
      </h1>

      {/* search bar */}

      <form onSubmit={handleSearch} className="py-4 w-fit ">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="location" type="search" required placeholder="Search" />
        </label>
      </form>

      <MapContainer
        ref={mapRef}
        className="h-[600px] w-[90%]  "
        center={position}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center, i) => {
          return (
            <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
