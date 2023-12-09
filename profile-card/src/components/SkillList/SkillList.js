import React from "react";

import Skill from "../Skill/Skill";

function SkillList({skills}) {
  return (
    <div className="skills">
      <ul className="skills-list">
        {skills.map( (skill) => {
          return <Skill name={skill.skill} bg={skill.color} level={skill.level} />
        })}
      </ul>
    </div>
  );
}

export default SkillList;
