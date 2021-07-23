import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <p>error 404</p>
                <button><Link to={`/Home/${this.props.loggedUser}`} >home</Link></button>
            </div>
        )
    }
}
export default ErrorPage
