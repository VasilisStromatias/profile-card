import "./App.css";

import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro/Intro";
import SkillList from "./components/SkillList/SkillList";

const skills = [
  {
    skill : 'HTML',
    level: 'expert',
    color: 'blue'
  },
  {
    skill : 'CSS',
    level: 'expert',
    color: 'red'
  },
  {
    skill : 'JS',
    level: 'expert',
    color: 'pink'
  },
  {
    skill : 'REACT',
    level: 'basic',
    color: 'orange'
  },
  {
    skill : 'SASS',
    level: 'basic',
    color: 'yellow'
  },
]

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList skills = {skills} />
        </div>
      </div>
    </>
  );
}

export default App;
