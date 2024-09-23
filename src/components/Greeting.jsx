import React, { useEffect, useState } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';

export default function Greeting() {
  const greetings = ['Hello', 'hola', '你好', 'Bonjour', 'Ciao','Здравствуйте', 'Namaste'];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [showGreeting, setShowGreeting] = useState(true);
  const [moveUp, setMoveUp] = useState(false); // State for controlling the bottom-to-top transition

  useEffect(() => {
    let index = 0;
    let firstGreetingTimeout, interval, transitionTimeout, hideGreetingTimeout;

    // First pause for 'Hello' (e.g. 1 second)
    firstGreetingTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index = (index + 1) % greetings.length;
        setCurrentGreeting(greetings[index]);
      }, 190); // Change message every 200ms after the first one.

      // Start bottom-to-top movement after 1 second
      transitionTimeout = setTimeout(() => {
        setMoveUp(true); // Trigger bottom-to-top movement

        hideGreetingTimeout = setTimeout(() => {
          setShowGreeting(false); // Hide greeting after the movement
          clearInterval(interval); // Clear the interval for greetings
        }, 1000); // Match transition duration
      }, 1000);
    }, 600); // Initial delay for the first "Hello"

    // Cleanup on unmount or reload
    return () => {
      clearTimeout(firstGreetingTimeout);
      clearTimeout(transitionTimeout);
      clearTimeout(hideGreetingTimeout);
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures it runs once per mount

  return (
    <>
      {showGreeting ? (
        <div
          id="greeting-screen"
          className={`greeting-screen text-center text-yellow transform transition-transform duration-1000 ${
            moveUp ? '-translate-y-full' : 'translate-y-0'
          }`} // Apply Tailwind bottom-to-top transition
        >
          <p className="bold text-5xl text-center text-yellow">• {currentGreeting}</p>
        </div>
      ) : (
        <div className='items-center '>
        <MainContent />
        </div>
      )}
    </>
  );
}
