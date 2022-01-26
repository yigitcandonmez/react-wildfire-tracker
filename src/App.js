import Map from "./components/Map";
import React, { useState, useEffect } from "react";
import fetchFireCoordination from "./API";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchFireCoordination();
    setEventData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {!loading ? <Map data={eventData} /> : <h1>Loading..</h1>}
    </div>
  );
};

export default App;
