import React, { useState, useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
    const [value, setValue] = useState("GFG");

    useLayoutEffect(() => {
        if (value === "GFG") {
            // setTimeout(() => {
            //     setValue("GeeksForGeeks")
            // },4000);
            setValue("GeeksForGeeks")
        }
        console.log("UseLayoutEffect is called with the value of : ", value);
    }, [value]);

    useEffect(() => {
        console.log("useEffect : ");
    }, []);

    console.log("home : ", value);

    const changeit = () => {
        setValue("lolol")
    }

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <p>{value} is the greatest portal for geeks!</p>
            <button onClick={changeit}>Change Button</button>
        </div>
    );
};

export default LayoutEffect;
