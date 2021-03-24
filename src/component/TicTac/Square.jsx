import React from 'react';


const style = {
    background: 'lightblue',
    border: '1px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

export const Square = ({onClick, value})=>(
        <button style={style} onClick={onClick}>
            {value}
        </button>
        
    )