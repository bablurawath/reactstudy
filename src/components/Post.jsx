import React, { useEffect, useState } from 'react';
import '../PostList.css'; // Import CSS file
const Post=()=>{
    const [posts, setPosts] = useState([]);     // State to store user data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null);     // State for error handling

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // API URL
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON
          })
          .then((data) => {
            setPosts(data);      // Update users state
            setLoading(false);   // Set loading false
          })
          .catch((err) => {
            setError(err.message);  // Set error if fetch fails
            setLoading(false);
          });
      }, []); // Empty dependency array = run only once on mount
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="slide-in" >
              <strong>{post.title}</strong> 
            </li>
          ))}
        </ul>
      );
    
}

export default Post;