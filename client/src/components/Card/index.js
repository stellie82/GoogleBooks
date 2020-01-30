import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card bg-light border-secondary">
            <div className="card-body">
                <h5 className="book-title">{props.title}</h5>
                <button className="btn btn-sm btn-info save" id={props.id} onClick={() => props.saveGoogleBook(props.id)}>Save</button>
                <button className="btn btn-sm btn-warning view"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button>
                <p><i>{props.authors}</i></p>
                <p className="book-description"><img src={props.image} className="book-img" alt="book-img" />{props.description}</p>
            </div>
        </div>
    );
}

export default Card;

