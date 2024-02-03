import { useState } from 'react';
import './Stepbar.css';
import Counter from './Counter';

function Stepbar(){

    const [stepValue,setStepValue] = useState(1);

    return (
        <>
            <div className='stepbar'>
                <input 
                    type='range' 
                    className='stepslider' 
                    min='0' 
                    max='10' 
                    value={stepValue} 
                    onChange={(e) => setStepValue(Number(e.target.value))}
                />
                <p className='step'>{stepValue}</p>
            </div>
            <Counter stepValue={stepValue} />
        </>
    )

}

export default Stepbar