

import React, { useEffect, useMemo, useState } from 'react';


const UseMemoHook = () => {

    const [darkTheme, toggleTheme] = useState(false)
    const [number, setNumber] = useState(1);

    function slowFunction(num) {

        for (let i = 0; i < 1000000000; i++);
        return num * 2
    };

    const doubleNumber = useMemo(() => {
        return slowFunction(number)

    }, [number])

    const themeStyle = useMemo(() => {
        return {
            background: darkTheme ? "#000" : "#fff",
            color: !darkTheme ? "#000" : "#fff",
        }
    }, [darkTheme])
    useEffect(() => {
        console.log("updating theme styles")
    }, [themeStyle])


    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", alignItems: "flex-start", flexDirection: "column" }}  >

            <input value={number} type={"number"} onChange={e => setNumber(+e.target.value)} />

            <button onClick={() => toggleTheme(s => !s)} >Toggle Theme</button>


            <div style={{ ...themeStyle, width: "100%" }} >

                <text>{doubleNumber}</text>
            </div>




        </div>
    );
};

export default UseMemoHook;


