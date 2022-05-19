import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import useFetch from './useFetch'

function BlogDetails() {
    const { id } = useParams()
    const { data: b, loading, error } = useFetch("http://localhost:8000/api/blog/" + id)
    const history=useHistory('')
    function handleClick(){
        fetch("http://localhost:8000/blogs/" + id,{
            method:'DELETE'
        })
        //.then(history.push('/'))
        .then(()=>{
            history.push('/')
        })

    }

    return (
        <div className="blogdetails">
            
           {error && <div><h3>{error}</h3></div>}

            {loading && <div>Loading Blogs...</div>}

            {b && (<article>
                <h3>{b.title}</h3>
                <h5>Written by: {b.author}</h5>
                <p className="blogdetails-body">{b.body}</p>
                <button className="btn" onClick={handleClick}>Delete</button>
                <div className='icn'><p className='blogdetails-body'><i class="fa fa-thumbs-up fa-2xl"></i>{b.like} | <i class="fa fa-thumbs-down fa-2xl"></i>{b.dislike} </p></div>

            </article>)
            }

        </div>
    )
}

export default BlogDetails
