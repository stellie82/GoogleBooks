import React from "react";
import "./style.css";

function SavedCard(props) {
    return (
        <div className="card border-secondary">
            <div className="card-body">
                <h5 className="book-title">{props.title}</h5>
                <button className="btn btn-sm btn-danger delete" id={props.id} onClick={() => props.deleteBook(props.id)}>Delete</button>
                <button className="btn btn-sm btn-warning view"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button>
                <p>{props.authors}</p>
                <img src={props.image} className="book-img" alt="book-img" />
                <p className="book-description">{props.description}</p>
            </div>
        </div>
    );
}

export default SavedCard;

