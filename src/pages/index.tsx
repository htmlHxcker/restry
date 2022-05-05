import { Pomodoro } from '@/features/Pomodoro';
import { TasksList } from '@/features/TaskList';

function Home() {
  return (
    <div className="flex items-center">
      <TasksList />
      <Pomodoro />
    </div>
  );
}

export default Home;
