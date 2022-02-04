import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <h1>useImperativeHandler</h1>
            <button
                onClick={() => {
                    buttonRef.current.buttonToggle();
                }}
            >
                Toggle Show on Parent
            </button>
            <button
                onClick={() => {
                    buttonRef.current.changeText();
                }}
            >
                Change Text on Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    );
};

export default ImperativeHandle;
