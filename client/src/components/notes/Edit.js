import React from 'react'
import axios from '../../config/axios'

import Form from './Form'

class NotesEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            note: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/notes/${id}`)
            .then(response => {
                // console.log(response.data)
                const note = response.data
                this.setState({note})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        // console.log('edit', formData)
        axios.put(`/notes/${id}`, formData)
            .then(response => {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                }else {
                    this.props.history.push('/notes')
                    // window.history.go(-1)
                }
            })
            .catch()
    }

    render() {
        // console.log(Object.keys(this.state.note).length)
        return(
            <div>
                <h3>Edit Notes here</h3>

                {Object.keys(this.state.note).length !== 0 && <Form {...this.state.note} handleSubmit={this.handleSubmit} /> }

            </div>
        )
    }
}

export default NotesEdit