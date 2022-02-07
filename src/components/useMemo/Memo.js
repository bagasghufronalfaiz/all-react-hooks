import { useEffect, useMemo, useState } from "react";

const Memo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                if (!response.ok) {
                    throw new setData("Network response was not OK");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                // console.log("data : ");
                // console.log(data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        // console.log("USE MEMO");

        return longestName;
    };

    const longestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <h1>useMemo</h1>
            <div> name : {longestName} </div>

            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    );
};

export default Memo;
