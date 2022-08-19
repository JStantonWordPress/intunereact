import React from "react";
import "../css/card.css";
import Comment from "../images/message.png";
import Thumb from "../images/thums-up.png";


function Card({
                  authorImage,
                  authorName,
                  date,
                  dealImage,
                  dealTitle,
                  salePrice,
                  origPrice,
                  store,
                  vote,
                  comments,
                  link,
              }) {
    return (
        <a href={link} className="card">
            <div className="cardAuthor">
                <img src={authorImage} className="cardAvatar" />
                <p>
                    Found by: <strong>{authorName}</strong>
                </p>
                <p>Date: {date}</p>
            </div>

            <img src={dealImage} class="cardImageSingle" alt="deal image" />

            <p className="cardTitle">{dealTitle}</p>
            <p className="cardPrice">${salePrice}</p>
            <div className="cardFooter">
                <div className="grid grid-bleed align-center cardFooterGrid">
                    <div className="col-7">
                        <p className="cardLocation">
                            at <span>{store}</span>
                        </p>
                    </div>
                    <div className="col-5 cardFooterRight">
                        <span className="cardVote">
                            <img src={Thumb} className="cardIcon1" alt="thumbs up icon" />
                            {vote}
                        </span>
                        <span className="cardComments">
                            <img src={Comment} className="cardIcon2" alt="comments icon" />
                            {comments}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;
