import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Blog({ blog}) {
const [search,setSearch]=useState("");

    return (

        <div>
             <input
        type="text"
        placeholder="Search..."
        value={search}
        className='center-block'
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
            {blog.filter((val) => {
            if (search=== "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(search.toLowerCase())||val.author.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else {
              return "";
            }
          }).map((blog) => (
                
                <div key={blog.id} className={(blog.like>=blog.dislike)?('container'):('containerr')} >
                    <h3>{blog.title}</h3>
                    <h4>Author: {blog.author}</h4>
                    <p className='blogdetails-body'>{blog.body.substring(0,250)}. . .</p>
                    <Link to={`/blog/${blog.id}`}>
                    <button className="btn">Read more</button>
                    </Link>
                    <div className='icn'><p className='blogdetails-body'><i class="fa fa-thumbs-up fa-2xl"></i>{blog.like} | <i class="fa fa-thumbs-down fa-2xl"></i>{blog.dislike} </p></div>
                    

                </div>
            ))}
        </div>
    )
}


export default Blog


