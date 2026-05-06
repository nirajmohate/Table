import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import Table from "./Table";

function App() {
  const [day, setDay] = useState(new Date().getDate());
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(day).then(setData);
  }, [day]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parental Legacy Chart</h2>

      <input
        type="number"
        min="1"
        max="31"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      {data && (
        <>
          <h3>Dominant: {data.dominant}</h3>
          <Table rows={data.rows} />
          <h4>Total: {data.overallTotal}</h4>
        </>
      )}
    </div>
  );
}

export default App;