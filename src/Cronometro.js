import React, { useState, useEffect } from 'react';
import './App.css';

function Cronometro() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="cronometro">
      <h1>Cronômetro</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={start}>Iniciar</button>
        ) : (
          <button onClick={pause}>Pausar</button>
        )}
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Cronometro;
