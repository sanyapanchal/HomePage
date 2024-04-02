// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Post = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

//   return (
//     <div className="post-list">
//       <h2 style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 'bold', color: '#262626' }}>Suggested for you</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Post;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="post-list">
      <h2 style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 'bold', color: '#262626' }}>Suggested for you</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <img src={`${post.image}`} alt={post.title} />
            <div className="post-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
