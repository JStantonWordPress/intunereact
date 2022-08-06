import React from "react";
import "../css/card.css";


function Card({ authorImage, authorName, date, dealImage, dealTitle, salePrice, origPrice, store, vote, comments, link }){
    return(
        <a href={link} className="card">
            <div className="cardAuthor">
                <img src={authorImage} className="cardAvatar" />
                <p>found by: <strong>{authorName}</strong></p>
                <p>{date} ago</p>
            </div>

            {/*<div className="cardImage" style={{backgroundImage: `url(${dealImage})`}}></div>*/}

            <img src={dealImage} class="cardImageSingle" alt="deal image" />

            <p className="cardTitle">{dealTitle}</p>
            <p className="cardPrice">${salePrice}</p>
            <div className="cardFooter">
                    <div className="grid grid-bleed align-center cardFooterGrid">
                        <div className="col-6">
                            <p className="cardLocation">at <span>{store}</span></p>
                        </div>
                        <div className="col-6 cardFooterRight">
                            <span className="cardVote">{vote}</span>
                            <span className="cardComments">{comments}</span>
                        </div>
                    </div>
            </div>
        </a>
    )
}

export default Card;