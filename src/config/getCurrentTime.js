function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = 'AM';

  let greeting = 'Good Morning';
  if (hours >= 5 && hours <= 11) {
    greeting = 'Good Morning';
  } else if (hours >= 12 && hours <= 17) {
    greeting = 'Good Afternoon';
  } else if (hours >= 17 && hours <= 5) {
    greeting = 'Good Evening';
  }

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = 12;
    session = 'PM';
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const time = `${hours}:${minutes}:${seconds} ${session}`;

  return { time, greeting };
}

export default getCurrentTime;
