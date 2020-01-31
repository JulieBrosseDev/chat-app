import React from 'react';
import './Contact.css';

function Contact (props){
    return (
        <figure className="Contact">
            <img className="avatar"
                src={props.avatar}
                alt={props.name} />
            <div>
                <p className="name">{props.name}</p>
                <p className="status"> 
                    {
                        props.status === "online"
                            ? <div className="status-online"></div>
                            : <div className="status-offline"></div>
                    } 
                    {props.status}
                    
                </p>
            </div>
        </figure>
    )
}


export default Contact;