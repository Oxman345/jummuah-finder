import React, { useEffect, useState } from "react";
import Map from "../Map/Map"

export default function Home() {
  // const [search, setSearch] = useState({ search: "" });

  function onTextChange() {
    console.log("In onTextChange");
  }

  return (
    <div className="Home">
      <Map />
      <div className="Search">
        <input
          className="InputField"
          placeholder="Search Jummuah Finder"
          onChange={onTextChange}
        ></input>
      </div>
    </div>
  );
}