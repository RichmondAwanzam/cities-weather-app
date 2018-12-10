import React,{PureComponent} from 'react'
import {NotesLoader} from '../components/notes-loader'
import moment from 'moment'
export default class WeatherHome extends PureComponent{


    state={
        data:[],
        textNote:"",
        selectedNote:null,
        editIndex:-1
    }
    
    searchKeyChange=(evt)=>{
        let value = evt.target.value
        this.setState({textNote:value})
    }

    addNote=()=>{
        let {data}=this.state
        let copyData=[{
            text:this.state.textNote,
            createdOn:moment().format("DD MMM YYYY, h:mm:ss a"),
            updatedOn:moment().format("DD MMM YYYY, h:mm:ss a")
        },...data]
        this.setState({data:copyData ,textNote:""})
    
    
    }
    updateNote(index){
        let data = this.deleteNote(index);
        let {selectedNote} = this.state
        selectedNote.text = this.state.textNote;
        let copyData=[selectedNote,...data]
        this.setState({data:copyData ,textNote:"",editIndex:-1})
    
    }

    loadAvailableNotes=()=>{
        return this.state.data.map((note,index)=>{
            return ( <NotesLoader key ={index} note={note} index={index} 
                onEdit={this.editNote} 
                onDelete={this.doDelete}/>)
        })
    }

    doDelete=(index)=>{
        let dataCopy = this.deleteNote(index);
        this.setState({data:dataCopy})
    }

    deleteNote=(index)=>{
        let {data} = this.state
        let dataCopy =[...data.slice(0,index),...data.slice(index+1)];

        return dataCopy;
    }

    editNote=(index)=>{
        let editNote =this.state.data[index];
        this.setState({textNote:editNote.text ,editIndex:index ,selectedNote:editNote})
    }
    render(){
        return (<div>

            <div>
            <textarea className="app-textarea" value={this.state.textNote} rows={6} width="250px" placeholder ={"Write your note here ... "} onChange={this.searchKeyChange}></textarea>
            </div>

            <button onClick={(evt)=>{
                if(this.state.editIndex===-1)
                {this.addNote();}
                else this.updateNote(this.state.editIndex);
            }}  disabled={this.state.textNote.trim()===""}> {this.state.editIndex===-1 ?"add Note" : "edit Note"}</button>

            <div>
                <h3>Available Notes</h3>

                <ul>
                    {
                        this.loadAvailableNotes()
                    }
                </ul>
                {
                    this.state.data.length < 1 && <div>No Available Note</div>
                }
             
            </div>
        </div>)
    }

}