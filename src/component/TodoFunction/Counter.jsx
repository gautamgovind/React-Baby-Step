import React, {useState, useEffect, useRef} from 'react';

function usePrevious(value){
    const ref = useRef();
    useEffect(()=>{
        ref.current = value;
    });
    return ref.current || 0;
}

const Counter=()=>{
    const [count, setCount] = useState(0);
    // Gets the previous value of count upon changes:
    // const prevCountRef = useRef(0);

    //const [prevCount, setPrevCount] = useState(count);
    // useEffect(() => {
    //     prevCountRef.current = count;
    //     setPrevCount(prevCountRef.current);
    // }, [count]);

    const prevCount = usePrevious(count);

    function handleClick() { setCount(count + 1) }
    
    return(
        <div>
            <h2>Counter</h2>
            Counter: {count}, Previous: {prevCount}
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Counter;