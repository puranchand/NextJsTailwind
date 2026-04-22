import { useEffect, useState } from "react";

export default function Onlineshop() {
  const targetDate = new Date("2026-12-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        
        {/* Logo / Brand */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My Online Store
        </h1>

        {/* Coming Soon Text */}
        <p className="text-lg text-gray-300 mb-8">
          🚀 We’re launching soon! Stay tuned for something amazing.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-gray-800 px-4 py-3 rounded-xl shadow-lg w-20"
            >
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs uppercase text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-black w-full sm:w-auto flex-1 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            Notify Me
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-8">
          © 2026 My Store. All rights reserved.
        </p>
      </div>
    </div>
  );
}