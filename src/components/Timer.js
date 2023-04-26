import React, { useState, useEffect } from "react";

function DateTimer() {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date();
    const saturday = 6;
    countdownDate.setDate(
      countdownDate.getDate() + ((saturday + 7 - countdownDate.getDay()) % 7)
    );
    countdownDate.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setRemainingTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid place-items-center space-y-4">
        <h2 className="font-thin text-4xl">Coming Soon</h2>
        <div className="md:flex grid grid-cols-2 items-center justify-center gap-4">
          <div className="py-3 w-32 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-4">
            <p className="block text-center">Days</p>
            <h2 className="font-thin text-6xl text-center">
              0{remainingTime.days}
            </h2>
          </div>
          <div className="py-3 w-32 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-4">
            <p className="block text-center">hours</p>
            <h2 className="font-thin text-6xl text-center">
              {remainingTime.hours}
            </h2>
          </div>
          <div className="py-3 w-32 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-4">
            <p className="block text-center">Minutes</p>
            <h2 className="font-thin text-6xl text-center">
              {remainingTime.minutes}
            </h2>
          </div>
          <div className="py-3 w-32 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-4">
            <p className="block text-center">Seconds</p>
            <h2 className="font-thin text-6xl text-center">
              {remainingTime.seconds}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateTimer;
