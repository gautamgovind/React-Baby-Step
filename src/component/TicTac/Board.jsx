import React from 'react';
import {Square} from './Square';


const style = {
    border: '2px solid darkblue',
    borderRadius: '5px',
    width: '250px',
    height: '250px',
    margin: 'o auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

export const Board = ({squares, onClick})=>(
    <div style={style}>
        {squares.map((item, i)=>(
            <Square key={i} value={item} onClick={()=> onClick(i)} />
        ))}
    </div>
   )