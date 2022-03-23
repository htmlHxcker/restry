import './index.scss';
import Timer from './Timer';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <Timer size={250} strokeWidth={20} percentage={100} />
      <div className="flex">
        <button type="submit" className="button--primary">▶</button>
        <button type="submit" className="button--primary">⏸</button>
        <button type="submit" className="button--primary">Start Pomodoro</button>
      </div>
    </div>
  );
}

export default Pomodoro;
