let timePassed = 0;

export default function countDown(timeLimit: number, reset?: boolean): number {
  if (timePassed >= timeLimit) {
    return 0;
  }
  if (reset === true) {
    timePassed = 0;
  } else {
    timePassed += 1;
  }
  const timeLeft = timeLimit - timePassed;

  return timeLeft;
}
