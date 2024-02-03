import { useState } from "react";
import Button from "./Button";
import './Counter.css';


function Counter({stepValue}){

    const [counts,setCounts] = useState(0);

    function initialPage(){
        setCounts(0)
    }

    function increaseCount(){
        setCounts(counts + stepValue)

    }

    function decreaseCount(){
        setCounts(counts - stepValue)

    }

    const date = new Date();
    date.setDate(date.getDate() + counts);

    return (
        <>
            <div className="counter">
                <Button value='-' onClick={decreaseCount}/>
                <p className="count">Count: {counts}</p>
                <Button value='+' onClick={increaseCount} />
            </div>
            <h4 className="date">{counts === 0 ? 'Today is ' : counts > 0 ? `${counts} days from today is ` : `${-counts} days ago was `}{date.toDateString()}</h4>
            {counts !== 0 && 
                <div className="reset-div">
                <button className="reset-btn" onClick={initialPage}>reset</button> 
                </div>
            }
        </>
    )
}

export default Counter