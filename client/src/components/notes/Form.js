import React from 'react'
import axios from '../../config/axios'

class Form extends React.Component {
    constructor(props) {
        // console.log(props.category)
        super(props)
        this.state = {
            title: props.title ? props.title : "",
            description: props.description ? props.description : "",
            category: props.category ? props.category._id : "",
            noteImage: props.noteImage ? props.noteImage : "",
            categoryName: props.category ? props.category.name : "select",
            categories: []
        }
    }

    componentDidMount() {
        axios.get('/categories')
            .then(response => {
                // console.log(response.data)
                const categories = response.data
                this.setState({categories})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleFileChange = (e) => {
        console.log(e.target.files)
        const noteImage = e.target.files[0]
        console.log(noteImage)
        this.setState({ noteImage })
    }

    handleChange = (e) => {
        console.log(e.target.value, 'clicked')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCatChange = (e) => {
        
        const category = e.target.value
        this.setState({category})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const formData = {
        //     title: this.state.title,
        //     description: this.state.description,
        //     category: this.state.category,
        //     noteImage: this.state.noteImage
        // }
        const formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('description', this.state.description)
        formData.append('category', this.state.category)
        formData.append('noteImage', this.state.noteImage)
        console.dir(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                        <input type="text" value={this.state.title} id="title" name="title" onChange={this.handleChange} /> <br />

                    <label htmlFor="description">Description</label>
                        <input type="text" value={this.state.description} id="description" name="description" onChange={this.handleChange} /> <br />
                    
                    <label>Category</label>
                    <select onChange={this.handleCatChange}>
                        <option value="">{this.state.categoryName}</option>
                        {
                           this.state.categories.map(category => {
                                return <option key={category._id} value={category._id} >{category.name}</option>
                           }) 
                        }
                    </select> <br />
                    <input type="file" name="noteImage" onChange={this.handleFileChange} /> <br />
                    <input type="submit" value="go!" />
                </form>
            </div>
        )
    }
}

export default Form