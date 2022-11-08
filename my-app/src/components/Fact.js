import React, { useState } from 'react';

const Fact = (props) => {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className='fact' key={props.fact}
            style={{
                backgroundColor: favorite ? 'yellow' : 'white'
            }}
            onClick={() => setFavorite(!favorite)}
        >
            {props.curr && <p>Current Fact: </p>}
            <p id='fact'>{props.fact}</p>
        </div>
    )
}

export default Fact;