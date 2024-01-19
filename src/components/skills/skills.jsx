import React, { useState } from "react";
import "./skills.css";

const SkillItem = ({ title, percentage }) => {
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`skill-item ${expanded ? "expanded" : ""} ${
        expanded ? "" : "closing"
      }`}
      onClick={handleItemClick}
    >
      <div>{title}</div>
      {expanded && (
        <div className="percentage" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="rectangle">
        <h2>Skills</h2>
      </div>
      <div className="skill-container">
        <SkillItem title="C#" percentage={70} />
        <SkillItem title="Java" percentage={75} />
        <SkillItem title="React" percentage={80} />
        <SkillItem title="Anything" percentage={100} />
        <SkillItem title="Blender" percentage={99} />
        <SkillItem title="Hardware specialist" percentage={95} />
      </div>
    </div>
  );
};

export default Skills;
