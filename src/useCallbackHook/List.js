

import React, { useEffect, useState } from 'react';

const List = ({ getNextNumbers }) => {

    const [numbers, setNumbers] = useState([])


    useEffect(() => {
        // will not re render due to theme change
        console.log("rendering the list")
        setNumbers(getNextNumbers())
    }, [getNextNumbers])


    return (
        <div>

            {
                numbers.map(num => <text>{num}<br></br></text>
                )
            }


        </div>
    );
};

export default List;
