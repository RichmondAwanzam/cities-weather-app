
import React from 'react';
import  './notes-loader.css'
export const NotesLoader=(props)=>{
    return (
        <>
        <li>
        <div className={"noteCard"}>
            <span> {props.note.text}</span>
            <div className="text-s">
                <span>Created On : {props.note.createdOn}</span> &nbsp;&nbsp;
                <span>Updated On : {props.note.updatedOn}</span>
            </div>
           <button onClick={(evt)=>{
               props.onDelete(props.index)
           } }>Delete</button>
            &nbsp;&nbsp;
           <button onClick={(evt)=>{
               props.onEdit(props.index)
           } }>edit</button>
        </div>
       </li>

        </>
    )
}