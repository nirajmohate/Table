import React from "react";

const Table = ({ rows }) => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Factor</th>
          <th>Mother</th>
          <th>Father</th>
          <th>Total</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r.factor}</td>
            <td>{r.mother}</td>
            <td>{r.father}</td>
            <td>{r.total}</td>
            <td>{r.min}</td>
            <td>{r.max}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;