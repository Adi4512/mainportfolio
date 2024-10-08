import React, { useEffect, useState } from 'react';
import MainContent from './MainContent';

export default function Greeting() {
  const greetings = ['Hello', 'hola', '你好', 'Bonjour', 'Ciao','Здравствуйте', 'Namaste'];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [showGreeting, setShowGreeting] = useState(true);
  const [moveUp, setMoveUp] = useState(false); 

  useEffect(() => {
    let index = 0;
    let firstGreetingTimeout, interval, transitionTimeout, hideGreetingTimeout;

    
    firstGreetingTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index = (index + 1) % greetings.length;
        setCurrentGreeting(greetings[index]);
      }, 190); 
      transitionTimeout = setTimeout(() => {
        setMoveUp(true); 

        hideGreetingTimeout = setTimeout(() => {
          setShowGreeting(false); 
          clearInterval(interval); 
        }, 1000); 
      }, 1000);
    }, 600); 

    
    return () => {
      clearTimeout(firstGreetingTimeout);
      clearTimeout(transitionTimeout);
      clearTimeout(hideGreetingTimeout);
      clearInterval(interval);
    };
  }, []); 

  return (
    <>
      {showGreeting ? (
        <div
          id="greeting-screen"
          className={`greeting-screen text-center text-yellow transform transition-transform duration-1000 h-screen  flex justify-center items-center  ${
            moveUp ? '-translate-y-full' : 'translate-y-0'
          }`} 
        >
          <p className="bold text-5xl text-center text-yellow">• {currentGreeting}</p>
        </div>
      ) : (
        <div className='items-center'>
        <MainContent />
        </div>
      )}
    </>
  );
}
