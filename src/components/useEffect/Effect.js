import React, { useState, useEffect } from "react";

const Effect = () => {
    const [status, setStatus] = useState();
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                if (!response.ok) {
                    throw new setStatus("Network response was not OK");
                }
                setStatus(response.status);
                return response.json();
            })
            .then((data) => {
                // console.log("data : ");
                // console.log(data);
                setData(data);
            })
            .catch((error) => {
                // console.error("Error:", error);
            });
    }, []);

    // console.log('data2 : ');
    // console.log(data);
    return (
        <div>
            <h1>useEffect</h1>
            <p>status : {status}</p>
            <p>data userId : {data.userId}</p>
            <p>data id : {data.id}</p>
            <p>data title : {data.title}</p>
            <p>data body : {data.body}</p>
        </div>
    );
};

export default Effect;
