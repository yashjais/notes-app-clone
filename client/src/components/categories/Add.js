import React from 'react'
import axios from 'axios'

import Form from './Form'

// class CategoriesAdd extends React.Component {
    
    // handleSubmit = (formData)  => {
    //     // console.log('hand', formData)
    //     axios.post('http://localhost:3015/categories', formData)
    //         .then(res => {
    //             // console.log(res.data)
    //             // if(Object.hasOwnProperty(res.data == 'errors')){
    //             //     alert(res.data.errors)
    //             // }else{
    //             //     console.log('haapppyy')
    //             // }
    //             this.props.history.push('/categories')
    //         })
    //         .catch(err => {
    //             alert(err)
    //         })
    // }

//     render() {
//         return (
//             <div>
//                 <h3>Add Category here</h3>

//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         )
//     }
// }

function CategoriesAdd(props) {
    const handleSubmit = (formData)  => {
        axios.post('http://localhost:3015/categories', formData)
            .then(res => {
                window.location.href = '/categories'
                // console.log(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <div>
            <h3>Add Category here</h3>

            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export default CategoriesAdd