import React from 'react'

import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class CategoriesShow extends React.Component {
    constructor() {
        super()
        this.state = {
            category: {},
            notes: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/categories/${id}`)
            .then(response => {
                const category = response.data[0]
                const notes = response.data[1]
                // console.log(category)
                this.setState({category, notes })
                
                // axios.get('/notes')
                //     .then(res => {
                //         // console.log(res.data)
                //         // console.log(category)
                //         const notes = []
                //         res.data.forEach(ele => (ele.category && ele.category._id === id && notes.push(ele) ))
                //         // console.log('notes', notes)
                //         this.setState({category, notes})
                //     })
                //     .catch(err => {
                //         alert(err)
                //     })
                
            })
            .catch(err => {
                alert(err)
            })

            /*
            const promises = []
            promises.push(axios.get(`/categories/${id}`))
            promises.push(axios.get(`/notes`))
            promises.all
                .then(response => {
                    console.log(response.data)
                })
             */
    }

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state.category)
        return(
            <div>
                <h3> Category Name - {this.state.category.name}</h3>
                {
                    this.state.notes.map(note => {
                        return <li key={note._id}>{note.title} - {note.description} <Link to={`/notes/${note._id}`}>show</Link> </li>
                    })
                }
                <Link to={`/categories/edit/${this.props.match.params.id}`}>edit</Link>
            </div>
        )
    }
}

export default CategoriesShow