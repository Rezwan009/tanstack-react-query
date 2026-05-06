import { useEffect, useState } from "react";

const FetchQuery = () => {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        setPosts(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      {loading && <p>loading....</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchQuery;
