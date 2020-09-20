import React from 'react'

class Form extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props)
        this.state = {
            name: props.name ? props.name : "",
        }
    }


    handleChange = (e) => {
        // console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": this.state.name
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleChange} /> <br />

                    <input type="submit" value="go!" />
                </form>
            </div>
        )
    }
}

export default Form