import React,{PureComponent} from 'react'
import { API_KEY,WEATHER_API_URL} from '../constants/app-constants'
import {NotesLoader} from '../components/notes-loader'
import axios from 'axios'
export default class WeatherHome extends PureComponent{

    con
    state={
        data:[],
        textNote:""
    }
    
    searchKeyChange=(evt)=>{
        let value = evt.target.value
        this.setState({textNote:value})
    }

    addNote=(evt)=>{
    
        let {data}=this.state
        let copyData=[...data,this.state.textNote]
        this.setState({data:copyData ,textNote:""})
    
    
    }

    loadAvailableNotes=()=>{
        return this.state.data.map((note,index)=>{
            return ( <NotesLoader key ={index} text={note} index={index} onDelete={this.deleteNote}/>)
        })
    }

    deleteNote=(index)=>{

        console.log("Delete Index",index)
        let {data} = this.state
        let dataCopy =[...data.slice(0,index),...data.slice(index+1)];
        this.setState({data:dataCopy})
    }
    render(){
        return (<div>

            <textarea  value={this.state.textNote} onChange={this.searchKeyChange}></textarea>

            <button onClick={this.addNote}>Add Note</button>

            <div>
                <h3>Avaialable Note</h3>
                <ul>
                    {
                        this.loadAvailableNotes()
                    }
                </ul>
            </div>
        </div>)
    }

}