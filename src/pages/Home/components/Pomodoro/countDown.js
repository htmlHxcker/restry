function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

let timePassed = 0;
export default function countDown(timeLimit) {
  if (timePassed >= timeLimit) {
    return '00:00';
  }
  timePassed += 1;
  const timeLeft = timeLimit - timePassed;

  return formatTime(timeLeft);
}
