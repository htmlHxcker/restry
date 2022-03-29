import './index.scss';
import Timer from './Timer';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <Timer />
      <div className="flex">
        <button type="submit" className="button--primary">▶</button>
        <button type="submit" className="button--primary">⏸</button>
        <button type="submit" className="button--primary">Start Pomodoro</button>
      </div>
    </div>
  );
}

export default Pomodoro;
