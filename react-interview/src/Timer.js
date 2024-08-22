import React, {useState, useEffect} from 'react'

function Timer({initialSeconds}){
    const [secondLeft, setSecondLeft] = useState(initialSeconds);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        let interVal = null;
        if(running && (secondLeft - 1) > 0){
            interVal = setInterval(() => {
                setSecondLeft(secondLeft - 1)
            }, 1000);
        }else if(!running && setInterval){
            clearInterval(interVal)
        }
        return () => clearInterval(interVal)
    }, [running, secondLeft])


    const handleStart = () => {
        setRunning(true)
    }

    const handleReset = () => {
        setRunning(false)
        setSecondLeft(initialSeconds)
    }

    return (<div>
        {
            running && secondLeft > 0 ? (
                <div>剩余时间: {secondLeft} 秒</div>
            ) : (
                <div>running ? 'time done' : don't start</div>
            )
        }

        <button onClick={handleStart} disabled={running}>开始</button>
        <button onClick={handleReset}>重置</button>
    </div>);
}