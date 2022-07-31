import React from "react";
import "../css/card.css";


function Card({ authorImage, authorName, date, dealImage, dealTitle, salePrice, origPrice, store, vote, comments, link }){
    return(
        <a href={link} className="card">
            <div className="cardAuthor">
                <img src={authorImage} className="cardAvatar" />
                <p>found by <strong>{authorName}</strong></p>
                <p>{date} ago</p>
            </div>
            <div className="cardImage" style={{backgroundImage: `url(${dealImage})`}}></div>
            <p className="cardTitle">{dealTitle}</p>
            <p className="cardPrice">${salePrice} <span>${origPrice}</span></p>
            <div className="cardFooter">
                    <p className="cardLocation">at <span>{store}</span></p>
                    <div className="grid grid-bleed align-center cardFooterGrid">
                        <div className="col-6">
                        <span className="cardVote">{vote}</span>
                        </div>
                        <div className="col-6">
                        <span className="cardComments">{comments}</span>
                        </div>
                    </div>
            </div>
        </a>
    )
}

export default Card;