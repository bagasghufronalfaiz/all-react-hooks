import React, { useRef, useState } from "react";

const Ref = () => {
    const text = useRef();
    const [data, setData] = useState();

    const changeText = () => {
        setData(text.current.value);
    }
    return (
        <div>
            <h1>useRef</h1>
            <div>
                <input type="text" placeholder="put something" ref={text}/>
                <button onClick={changeText}>Change Text</button>
                <h4>{data}</h4>
            </div>
        </div>
    );
};

export default Ref;
