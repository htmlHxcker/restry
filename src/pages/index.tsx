import { Pomodoro } from '@/features/Pomodoro';
import { TasksList } from '@/features/TaskList';

function Home() {
  return (
    <div className="flex">
      <TasksList />
      <Pomodoro />
    </div>
  );
}

export default Home;
