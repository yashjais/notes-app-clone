import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class NotesList extends React.Component{
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3015/notes')
            .then(response => {
                const notes = response.data
                console.log(notes)
                this.setState({notes})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleRemove = (id) => {
        axios.delete(`http://localhost:3015/notes/${id}`)
            .then(response => {
                const note = response.data
                this.setState(prevState => {
                    return({
                        notes: prevState.notes.filter(notes => notes._id !== note._id)
                    })
                })
            })
    }

    render() {
        return(
            <div>
                <h2>Listing of notes - {this.state.notes.length}</h2>
                <ul>
                    {
                        this.state.notes.map(note => {
                        return <li key={note._id}> Title - {note.title} <br/> Description - {note.description} <br/> Category - {note.category ? note.category.name : 'null'}  <br /> {note.noteImage ? <img src={`http://localhost:3015/${note.noteImage}`} alt="image" style = {{width: '150px'}}  /> : 'Image not Available'} <Link to={`/notes/${note._id}`}>show</Link> <button onClick={() => {
                            this.handleRemove(note._id)
                        }}>remove</button></li>
                        })
                    }
                </ul>
                <Link to='notes/add'>add</Link>
            </div>
        )
    }
}

export default NotesList