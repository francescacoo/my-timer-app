import React from "react";

const LapList = ({ laps }) => {
  return (
    <div>
      <h2>Lap List</h2>
      <table>
        <thead>
          <tr>
            <th>Timer Name</th>
            <th>Lap</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lap, index) => (
            <tr key={index}>
              <td>{lap.name}</td>
              <td>{new Date(lap.time).toISOString().slice(14, -1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LapList;
