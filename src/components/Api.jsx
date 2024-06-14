import React from "react"
import { useState, useEffect } from "react"
function Api () {

    const [apiPost, setApiPost] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!res.ok){
                    throw new Error('Data fetching failed')
                }
                const data = await res.json()
                setApiPost(data);
            } catch (err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <h1 className="loading">
                Loading<span>.</span><span>.</span><span>.</span>
            </h1>
        )
    }
    if (error) {
        return <h1>Data fetching failed</h1>
    }

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {apiPost.map( (post, index) => (
                    <li key={post.id}>
                        <h2>
                            {index + 1}. {post.title}
                        </h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Api