import React from 'react'
import Form from './Form'
import axios from '../../config/axios'

// class NotesAdd extends React.Component {

//     handleSubmit = (formData) => {
//         // console.log(formData)
//         axios.post('/notes',formData)
//             .then(response => {
//                 console.log(response.data)
//                 this.props.history.push('/notes')
//             })
//             .catch(err => {
//                 alert(err)
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Add component</h3>
//                 <h4>add form here</h4>
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         )
//     }

// }

function NotesAdd(props) {

    const handleSubmit = (formData) => {
        // console.log(formData)
        axios.post('/notes',formData)
            .then(response => {
                // console.log(response.data)
                window.location.href = '/notes'
            })
            .catch(err => {
                alert(err)
            })
    }

    
    return (
        <div>
            <h3>Add component</h3>
            <h4>add form here</h4>
            <Form handleSubmit={handleSubmit} />
        </div>
    )


}


export default NotesAdd