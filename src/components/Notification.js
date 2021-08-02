import React, { useState } from 'react'
import classes from './Notification.module.css'

const Notification = props => {
    const[classN, setClassN] = useState(classes.appear);

    return (
        <div className={`${classes.notification} ${classN}`}>
            <h3>{props.notificationMsg}</h3>
            <button onClick={() =>{setClassN(classes.disappear)}}>Dismiss</button>
        </div>
    )
}

export default Notification
