import React from 'react' 

import axios from 'axios'
import { Link } from 'react-router-dom'

class NotesShow extends React.Component {
    constructor(){
        super() 
        this.state = {
            note: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3015/notes/${id}`)
            .then(response => {
                // console.log(response.data)
                const note = response.data
                console.log(note)
                this.setState({note})
            })
    }

    render() {
        // console.log(this.props.match.params.id)
        return(
            <div>
                <h2>Show Note</h2>
                <h3>Title - {this.state.note.title}</h3>
                <h3>Description - {this.state.note.description}</h3>
                <h3>Category - {this.state.note.category ? this.state.note.category.name : 'null'}</h3>
                { (this.state.note.noteImage) ? <img src={`http://localhost:3015/${this.state.note.noteImage}`} alt="image" style = {{width: '150px'}} /> : 'Image not Available'} <br />
                <Link to={`/notes/edit/${this.state.note._id}`}>edit</Link> <br />
                <Link to='/notes'>back</Link>
            </div>
        )
    }
}

export default NotesShow