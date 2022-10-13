import React, { useEffect, useState } from 'react';
import './App2.css';
import axios from 'axios'

export default function App2() {
    const [post, setPost] = useState([])
    useEffect(() =>{
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {setPost(res.data) })

    },[])
    return (
        <div>
        {
            post.map(posts => (
                <div>
                    {posts.body}  
                </div>
            ))
        }
            </div>
    )
}
