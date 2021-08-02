import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section>
            <h1>Page not found.</h1>
            <h3><Link to='/'>Go back to Home page</Link></h3>
        </section>
    )
}

export default NotFound
