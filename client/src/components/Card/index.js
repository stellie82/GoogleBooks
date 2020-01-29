import React from "react";
// import "./style.css";

function Card(props) {
    return (
        <div className="card border-dark">
            <div className="card-header">
                <h5>
                    <a className="article-title" href={props.link} target="_blank">{props.title}</a>
                </h5>
                <button className="btn btn-sm btn-outline-warning delete-saved" article-id={props.id}>Delete from Saved</button>
                <button className="btn btn-sm btn-outline-info article-notes" article-id={props.id} data-toggle="modal"
                    data-target="#modalBox">Article Notes</button>
            </div>
            <div className="card-body">
                <img src={props.image} className="article-img" alt="article-photo" style="width: 200px" />
                <p>{props.summary}</p>
            </div>
        </div>
    );
}

export default Card;