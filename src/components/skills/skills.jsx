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
  const [showSecret, setShowSecret] = useState(false);

  const handleMouseEnter = () => {
    setShowSecret(true);
  };

  const handleMouseLeave = () => {
    setShowSecret(false);
  };

  const handleClick = () => {
    
    window.location.href = "https://www.youtube.com/watch?v=eSkK2kqU3JM";
  }
  return (
    <div id="skills" className="skills">
      <div className="rectangle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <h2>Skills</h2>
      </div>
      {showSecret && <div className="secret-popup">Click on "Skills" to reveal a secret!</div>}
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
