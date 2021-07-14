import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = React.useState([]);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  })

  useEffect(() => {
   /* fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json()
      .then(res => setPosts(pState => [...pState, ...res]))
    )*/
    api.get("/posts")
      .then(res => setPosts(pState => [...pState, ...res.data]))
  }, []);

  return (
    <div>
      {posts.map(post => (
         <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
