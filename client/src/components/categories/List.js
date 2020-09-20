import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class CategoriesList extends React.Component{
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3015/categories')
            .then(response => {
                const categories = response.data
                // console.log(categories)
                this.setState({categories})
            })
            .catch(err => {
                alert(err)
            })
    }

    handleClick = (e) => {
        // console.log('remove ')
        const id = e.target.value
        axios.delete(`http://localhost:3015/categories/${id}`)
            .then(res => {
                // const categories = res.data
                this.setState(prevState => {
                    return {
                        categories : prevState.categories.filter(ele => ele._id !== id)
                    }
                })
            })
    }

    render() {
        return(
            <div>
                <h2>Listing of Categories - {this.state.categories.length}</h2>
                <ul>
                    {
                        this.state.categories.map(category => {
                        return <li key={category._id}>{category.name} <Link to={`categories/${category._id}`}>show</Link> <button value={category._id} onClick={this.handleClick}>remove</button> </li>
                        })
                    }
                </ul>
                <Link to='/categories/add'>add</Link>
            </div>
        )
    }
}

export default CategoriesList