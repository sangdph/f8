import {useState, useEffect} from 'react'
const tasks=['posts', 'comments', 'albums'];
function Content(){
    const [title, setTitle] = useState('Chị Nhi yêu Sang');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(()=>{
        document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[type])

    return(
        <div>
            {tasks.map(task=>(
                <span key={task}>
                    <button
                        onClick={()=>setType(task)}
                        style={type===task ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        }:{}}
                    >
                        {task}
                    </button>
                </span>
            ))}
            <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            Xin chào chị Xuân Nhi
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
