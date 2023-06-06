import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const col=  colors.map((colorr)=>{return <li key={colorr} style={{ color: colorr }}>{colorr}</li>})

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       {col}
      </ol>
    </div>
  );
}

export default ColorList;
