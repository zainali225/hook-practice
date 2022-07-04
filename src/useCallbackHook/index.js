

import React, { useState } from 'react';
import List from './List';

const UseCallBack = () => {

    const [darkTheme, toggleTheme] = useState(false)
    const [number, setNumber] = useState(0);

    const getNextNumbers = React.useCallback(() => {
        return [number + 1, number + 2, number + 3]
    }, [number])


    const theme = {
        background: darkTheme ? "#000" : "#fff",
        color: !darkTheme ? "#000" : "#fff",
    }


    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", alignItems: "flex-start", flexDirection: "column" }}  >

            <input value={number} type={"text"} onChange={e => setNumber(+e.target.value)} />

            <button onClick={() => toggleTheme(s => !s)} >Toggle Theme</button>
            <div style={{ ...theme, width: "100%" }} >

                <List getNextNumbers={getNextNumbers} />
            </div>



        </div>
    );
};

export default UseCallBack;
