import React from "react";

function Skill({ name, icon, bg }) {
  return (
    <li className="skill" style={{ backgroundColor: bg }}>
      {name}
      {icon}
    </li>
  );
}

export default Skill;
