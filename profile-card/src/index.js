import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skillName: "HTML+CSS",
    level: "advanced",
    bgColor: "blue",
  },
  {
    skillName: "JavaScript",
    level: "advanced",
    bgColor: "yellow",
  },
  {
    skillName: "Web Design",
    level: "advanced",
    bgColor: "lightgreen",
  },
  {
    skillName: "Git and Github",
    level: "advanced",
    bgColor: "orangered",
  },
  {
    skillName: "React",
    level: "medium",
    bgColor: "cyan",
  },
  {
    skillName: "Svelte",
    level: "beginner",
    bgColor: "red",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" alt="Generic profile pic" src="profile.webp" />
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(({ skillName, level, bgColor }) => (
        <Skill skillName={skillName} level={level} bgColor={bgColor} />
      ))}
      {/*<Skill skillName="HTML+CSS" emoji="💪" bgColor="blue" />
      <Skill skillName="JavaScript" emoji="💪" bgColor="yellow" />
      <Skill skillName="Web Design" emoji="💪" bgColor="lightgreen" />
      <Skill skillName="Git and GitHub" emoji="💪" bgColor="orangered" />
      <Skill skillName="React" emoji="👍" bgColor="cyan" />
      <Skill skillName="Svelte" emoji="👶" bgColor="red" />*/}
    </div>
  );
}

function Skill({ skillName, level, bgColor }) {
  let emoji = "";
  switch (level) {
    case "advanced":
      emoji = "💪";
      break;
    case "medium":
      emoji = "👍";
      break;
    case "beginner":
      emoji = "👶";
      break;
    default:
      break;
  }
  return (
    <span className="skill" style={{ backgroundColor: bgColor }}>
      {skillName}
      {emoji}
    </span>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
