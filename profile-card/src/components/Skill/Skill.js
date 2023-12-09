import React from "react";

function Skill({ name, level , bg}) {
  console.log(name, level)
  return (
    <li className={`skill ${level}`} style={{ backgroundColor: bg }}>
      {name}
      {level === "expert" ? "💪" : "👶"}
    </li>
  );
}

export default Skill;
