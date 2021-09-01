import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string
}

const defaultPosts :IPost[] =[];

const RestApp =() =>{

    const [posts,setPosts]:[IPost[], (posts:IPost[]) => void]=useState(defaultPosts)
    const[loading ,setLoading]: [boolean,(loading:boolean)=> void]= useState<boolean>(true)
    const[error,setError] :[string,(error : string) =>void]=useState('')

useEffect(() =>{

    const postsData = JSON.parse(localStorage.getItem('posts')|| "[]");
    const pdata=  Array.isArray(postsData) ? postsData : [postsData];
    /* if data is in local storage ... not calling server */
    if(pdata && pdata.length>0){
        setPosts(postsData)
    }else{

    axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts',{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((response)=>{
        
        
        setPosts(response.data);
        setLoading(false);
       localStorage.setItem('posts',JSON.stringify(response.data));
    })
    .catch((ex)=>{
        let error =axios.isCancel(ex)
        ? 'A timeout has occured'
        : ex.response.status ===404
        ? 'Resource Not Found'
        : 'An unexpected error has occured'
        setError(error)
        setLoading(false)
    })
}
},[])



    return(
        <div className='container'>
            <div className='card'>
<ul className='list-group'>
    {posts.map((post)=>(
        <li key={post.id} className='list-group-item'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    ))}
</ul>
</div>
        </div>
    )
}
export default RestApp