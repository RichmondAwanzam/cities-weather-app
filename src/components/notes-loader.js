
import React from 'react';

export const NotesLoader=(props)=>{
    return (
        <>
        <li>
        <div>
            <span> {props.text}</span>
           <button onClick={(evt)=>{
               props.onDelete(props.index)
           } }>Delete</button>
        </div>
       </li>

        </>
    )
}