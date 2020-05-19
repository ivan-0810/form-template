import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Footer from './components/footer/Footer';

function App() {
  const [isReady, setIsReady] = useState(false);
 

  useEffect(() => {
    window.scrollTo(0,0);
    const timeout = setTimeout(() =>{
      setIsReady(true);
    },500)

    return () => {
      clearTimeout(timeout);
   }

  }, [isReady])
  
  return (
    <div className="App">
        <div className="box">
            <Form isReady={isReady}/>
        </div>
        <Footer isReady={isReady}/>
    </div>
  );
}

export default App;
