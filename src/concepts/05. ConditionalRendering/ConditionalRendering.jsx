import { useState } from 'react';
import Counter from '../04. Props/Counter';

export default function ToggleCounter() {
    const [showCounter, setShowCounter] = useState(false);

    function handleToggle() {

        // 1st Method:
        // if(showCounter){
        //     setShowCounter(false);
        // } else{
        //     setShowCounter(true);
        // }
        
        // 2nd Method:
        // showCounter ? setShowCounter(false) : setShowCounter(true);
        
        // 3rd Method:
        setShowCounter(!showCounter)
    }
    return (
        <div>
            <button onClick={handleToggle}>
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>

            {showCounter && <Counter diff={1} name="Yathe" />}
        </div>
    )

}