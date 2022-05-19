import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const history=useHistory('')
    
   const handleSubmit= async (e)=> {
        e.preventDefault();
        // const blog = { title, author, body }
        // console.log(blog)
        // fetch('http://localhost:8000/api/post-blog', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body : JSON.stringify(blog)
        // })
        try {
            const { data } = await axios.post("http://localhost:8000/api/post-blog", {
                body,
                title,
                author,
                like,
                dislike
              });
              console.log(data);
              history.push('/');
        } catch (error) {
            console.log(error)
        }
        
        //.then( history.push('/'))
        // .then(()=>{
        //     history.push('/')
        // })

    }


 

    return (
        <div className="create">
            <h3>Add new Blog</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                >

                </input>
                <label>Author</label>
                <input type="text" required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}

                ></input>
                <label>Write your blog here</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}

                ></textarea>
                <p>please enter manually number of like and dislike to see changes in blog preview's  border </p>
                <label>like</label>
                <input type="number" 
                    value={like}
                    onChange={(e) => setLike(e.target.value)}

                ></input>
                <label >dislike</label>
                <input type="number" 
                    value={dislike}
                    onChange={(e) => setDislike(e.target.value)}
                    className="icn"
                ></input>
                <button className="btn">Add Blog</button>
               



            </form>
        </div>
    )

}

export default CreateForm



