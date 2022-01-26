import React from "react";
import { AiFillFire } from "react-icons/ai";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker">
      <AiFillFire style={{ color: "red", fontSize: "1.6em" }} />
    </div>
  );
};

export default LocationMarker;
