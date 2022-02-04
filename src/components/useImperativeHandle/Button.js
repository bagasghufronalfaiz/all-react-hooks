import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, buttonRef) => {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("blue");

    const buttonToggle = () => {
        setToggle(!toggle);
    }

    const changeTextToRed = () => {
        setText("red");
    }

    const changeTextToYellow = () => {
        setText("yellow");
    }

    useImperativeHandle(buttonRef, () => ({
        buttonToggle: buttonToggle,
        changeText: changeTextToYellow,
    }));
    

    return (
        <div>
            <button onClick={buttonToggle}>Toggle Show on Child</button>
            <button onClick={changeTextToRed}>Change Text on Child</button>
            {toggle && <p>{text}</p>}
        </div>
    );
});

export default Button;
