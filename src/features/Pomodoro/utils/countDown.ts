let timePassed = 0;

export default function countDown(timeLimit: number): number {
  if (timePassed >= timeLimit) {
    return 0;
  }
  timePassed += 1;
  const timeLeft = timeLimit - timePassed;

  return timeLeft;
}
