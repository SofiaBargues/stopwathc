import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  let interval: any;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      console.log(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen font-mono ">
      <div className=" flex flex-col items-center justify-center gap-9 bg-[#2a323c] py-10 w-80 rounded-xl">
        <h1 className="text-3xl font-semibold ">Stopwatch</h1>
        <div className="text-5xl flex flex-row items-center font-semibold">
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
          <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}: </span>
          <span> {("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className=" w-1/3 max-w-sm flex flex-row gap-4 justify-evenly ">
          {running ? (
            <button
              className="btn btn-error"
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}
          <button
            className="btn btn-info"
            disabled={running}
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
