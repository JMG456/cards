import React, {useState} from 'react'
import CardList from '../components/CardList'

const AllCards = () => {
    const [title, setTitle]=useState('Loading Cards...')
    return (
        <section>
            <h1>{title}</h1>
            <CardList setTitle={setTitle}/>
        </section>
    )
}

export default AllCards
