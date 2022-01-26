const fetchFireCoordination = async () => {
  const res = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open"
  );
  const events = await res.json();
  return events.events.map((event) => ({ ...event }));
};

export default fetchFireCoordination;
