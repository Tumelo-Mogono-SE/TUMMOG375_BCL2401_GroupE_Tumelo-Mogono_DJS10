import React from "react"
import { useState, useEffect } from "react"
function Api () {

    const [apiPost, setApiPost] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!res.ok){
                    throw new Error('Data fetching failed')
                }
                const data = await res.json()
                setApiPost(data);
            } catch (err){
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {apiPost.map( post => (
                    <li>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Api