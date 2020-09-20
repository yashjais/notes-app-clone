import React from 'react'
import axios from '../../config/axios'

import Form from './Form'

class CategoriesEdit extends React.Component {
    constructor() {
        super() 
        this.state = {
            category: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id,'idd')
        const id = this.props.match.params.id
        axios.get(`/categories/${id}`)
            .then(res => {
                // console.log(res.data)
                const category = res.data
                this.setState({category})
            })
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        // console.log(formData, id, "id")
        axios.put(`/categories/${id}`, formData)
            .then(res => {
                // console.log(res)
                this.props.history.push('/categories')
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return(
            <div>
                <h3>Edit Category here</h3>
                {
                    Object.keys(this.state.category).length !== 0 && <Form {...this.state.category} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default CategoriesEdit