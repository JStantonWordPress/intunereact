import React from "react";
import "../css/frontdeals.css";
import Card from "../components/Card";
import Logo from "../images/logo.png";
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
    console.log(pageCount)
    useEffect(() => {
        pullData();
        console.log({pageCount})
    }, []);

    const loadMore = () => {
        setPageCount((prevCount) => {
            return prevCount + 1;
        });
    };

    return (
        <div className="container frontDealsContainer">
            <div className="grid">
                <div className="col-sm-12 titleCopy">
                    <p>The Latest Deals</p>
                    <h2>Frontpage Trending Deals</h2>
                </div>
            </div>

            <div className="grid cardGrid">
                {
                    console.log(topics)
                }
                {topics.length > 0 && topics.map((obj) => {
                    const date = obj.created_at
                    const imageURL = obj?.image_url
                    const imageURLback = "https://intunedeals.com/static/media/hero-back-min.31552017f3819b7770f6.jpg"
                    return (
                        <div key={obj.id} className="col-sm-4 col-md-3 col-lg-2 col-grid">
                            <Card
                                authorName={obj.author?.name}
                                date={date}
                                authorImage ={"https://community.intunedeals.com/user_avatar/community.intunedeals.com/"+obj.author?.username+"/90/3_2.png"}
                                dealImage={imageURL ? imageURL : imageURLback}
                                dealTitle={obj?.title}
                                salePrice={obj?.Price}
                                store={obj?.Store}
                                vote={obj?.like_count}
                                comments={obj?.posts_count}
                                link={"https://community.intunedeals.com/t/" + obj.slug + "/" + obj.id}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="grid">
                <div className="col-sm-12">
                    <button className="loadMore" onClick={loadMore} >
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
}
