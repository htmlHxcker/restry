import Pomodoro from './components/Pomodoro';
import Tasks from './components/Tasks';
import './home.scss';

function Home() {
  return (
    <div className="flex home">
      <Tasks />
      <Pomodoro />
    </div>
  );
}

export default Home;
