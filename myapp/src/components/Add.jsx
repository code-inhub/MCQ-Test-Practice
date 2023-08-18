    import React from "react";
    import { useState } from "react";
    import { addData } from "../Api";

    function Add({ setData }) {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
        question: question,
        options: [option1, option2, option3, option4],
        };
        addData(data, setData);
    };

    return (
        <>
        <h2 style={{ marginLeft: "33%" }}> ADD DATA:-</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
            <input
                style={{ display: "block" }}
                type="text"
                placeholder="Enter question"
                onChange={(e) =>{ setQuestion(e.target.value)
                }}
            />
            <label htmlFor="input">Options:</label>

            <input
                style={{ display: "block" }}
                type="text"
                placeholder="Enter option 1 "
                onChange={(e) => setOption1(e.target.value)}
            />
            <input
                style={{ display: "block" }}
                type="text"
                placeholder="Enter option 2 "
                onChange={(e) => setOption2(e.target.value)}
            />
            <input
                type="text"
                style={{ display: "block" }}
                placeholder="Enter option 3 "
                onChange={(e) => setOption3(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter option 4 "
                onChange={(e) => setOption4(e.target.value)}
            />
            <button>Submit</button>
            </form>
        </div>
        </>
    );
    }

    export default Add;
