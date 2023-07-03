import React, {useState} from 'react';

const Counter = (props) => {
    const [count,setCount] = useState(props.value);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={() => setCount(count - 1)}>dec</button>
        </div>
    )
};

export default Counter;