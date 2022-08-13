import React from "react";
import "../css/frontdeals.css";
import Card from "../components/Card";
import Placeholder from "../images/place-holder-image.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FrontDeals() {
    const [topics, setTopics] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const pullData = async () => {
        const api = `https://community.intunedeals.com/latest.json?page=${pageCount}`;
        try {
            const options = {
                method: "GET",
                url: api,
            };
            let response = await axios(options);
            let { users, topic_list } = response.data;
            let list = topic_list.topics.map((topic) => {
                return {
                    ...topic,
                    author: users.filter(
                        (item) => item.id === topic.posters[0].user_id
                    )[0],
                };
            });
            setTopics((prev) => [...prev, ...list]);
        } catch (error) {
            console.log({ error });
        }
    };

    useEffect(() => {
        pullData();
    }, []);

    const loadMore = () => {
        setPageCount((prevCount) => {
            return prevCount + 1;
        });
    };

    const productList =
        topics.length > 0 &&
        topics.map((obj) => {
            const recivedData = new Date(obj.created_at);
            const date = `${recivedData.toLocaleString("default", {
                month: "long",
            })} ${recivedData.getDate()} `;
            const imageURL = obj?.image_url;
            const imagePath = obj.author.avatar_template.replace("{size}", "90");
            const imageURLback = Placeholder;
            return (
                <div key={obj.id} className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName={obj.author?.name}
                        date={date}
                        authorImage={`https://community.intunedeals.com/${imagePath}`}
                        dealImage={imageURL ? imageURL : imageURLback}
                        dealTitle={obj?.title}
                        salePrice={obj?.Price}
                        store={obj?.Store}
                        vote={obj?.like_count}
                        comments={obj?.posts_count}
                        link={
                            "https://community.intunedeals.com/t/" + obj.slug + "/" + obj.id
                        }
                    />
                </div>
            );
        });

    return (
        <div className="container frontDealsContainer">
            <div className="grid">
                <div className="col-sm-12 titleCopy">
                    <p>The Latest Deals</p>
                    <h2>Frontpage Trending Deals</h2>
                </div>
            </div>

            <div className="grid cardGrid">{productList}</div>

            <div className="grid">
                <div className="col-sm-12">
                    <button className="loadMore" onClick={loadMore}>
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
}

