import React from "react";

import Skill from "../Skill/Skill";

function SkillList() {
  return (
    <div className="skills">
      <ul className="skills-list">
        <Skill name="HTML" icon="💪" bg="blue" />
        <Skill name="CSS" icon="💪" bg="red" />
        <Skill name="JS" icon="💪" bg="green" />
        <Skill name="REACT" icon="👶" bg="yellow" />
        <Skill name="SASS" icon="💪" bg="pink" />
      </ul>
    </div>
  );
}

export default SkillList;
