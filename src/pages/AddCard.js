import React from 'react'
import AddCardForm from '../components/AddCardForm'

const AddCard = ({imageIndex}) => {
    return (
        <section>
            <h1>Enter Card Details</h1>
            <AddCardForm imageIndex={imageIndex}/>
        </section>
    )
}

export default AddCard
