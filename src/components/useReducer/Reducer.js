import React, { useReducer } from "react";

// const initialCount = {count: 0};

function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return init(action.payload);
        default:
            throw new Error();
    }
}

const Reducer = () => {
    const initialCount = 0;

    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <div>
            <h1>useReducer</h1>
            Count: {state.count}
            <button
                onClick={() =>
                    dispatch({ type: "reset", payload: initialCount })
                }
            >
                Reset
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    );
};

export default Reducer;
