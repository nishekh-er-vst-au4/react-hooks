import React, { useState, useEffect } from "react";
import Axios from "axios";

function DataFetchingWithId() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]); // because id needs to be track whenver user enters id effects to be applied

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>FetchPost</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetchingWithId;
