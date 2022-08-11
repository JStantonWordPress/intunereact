import React, {useState, useEffect} from 'react'

function Feed() {
const [items, setItems] = useState([])
const [visible, setVisible] = useState()
const [error, setError] = useState()


const loadMore =() =>{
    setVisible(visible + 6)
}

useEffect(() =>{

    fetch("https://community.intunedeals.com/tag/frontpage.json").then(
      res => res.json()
    ).then(res => {
        setItems(res);
    }).catch(error => {
      console.error(error);
      setError(true);
    });
  })

  return (
    <section className="feed">
      <h1>Simple Load More/Pagination with React</h1>
      <h2>With Array.prototype.slice() and the power of component state!</h2>

      <div className="tiles" aria-live="polite">
        {items.slice(0, visible).map((item, index) => {
            return (
              <div className="tile fade-in" key={item.id}>
                <span className="count">{index+1}</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
        {visible < items.length &&
           <button onClick={loadMore} type="button" className="load-more">Load more</button>
        }
      </section>
  );
}

export default Feed