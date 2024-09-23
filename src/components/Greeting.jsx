import React,{useEffect, useState} from 'react'



    export default function Greeting() {

        const greetings = ['Hello','hola','你好','Bonjour', 'Ciao','Olá','Halló','Здравствуйте','Namaste'];
        const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
        const [showGreeting, setShowGreeting] = useState(true);
        
        useEffect(() => {
            let index = 0;
            
            // First pause for 'Hello' (e.g. 1 second)
            const firstGreetingTimeout = setTimeout(() => {
              const interval = setInterval(() => {
                index = (index + 1) % greetings.length;
                setCurrentGreeting(greetings[index]);
              }, 200); // Change message every 500ms after the first one.
          
              // Clear the interval after 2 seconds (or adjust as needed)
              setTimeout(() => {
                
                setShowGreeting(false),1000
                clearInterval(interval);
              }, 2000);
              
            }, 600); // 1 second pause for the first "Hello"
          
            return () => {
              clearTimeout(firstGreetingTimeout);
            };
          }, []);
      
        return (
          <>
            {showGreeting ? (
                <div id="greeting-screen" className="greeting-screen">
                <p>~{currentGreeting}</p>
              </div>
            ):(
                <div id="main-content">
          <h1></h1>
        </div>
            )
            }
              
            
          </>
        );
      };
