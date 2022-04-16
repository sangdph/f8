import {useState, useEffect} from 'react'
const tasks=['posts', 'comments', 'albums'];

function Content(){
    const [title, setTitle] = useState('Chị Nhi yêu Sang');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[type])

    //Start: Scroll to top
    useEffect(()=>{
        const handleScroll = ()=>{
            setShow(window.scrollY>=300);
        }
        window.addEventListener('scroll',handleScroll);
        console.log('addEventListener-scroll')
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            console.log('removeEventListener-scroll');
        };
    },[])

    const buttonScroll = () =>{
        window.scroll(0,0);
    }
    //End: Scroll to top

    //start: resize
    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        console.log('addEventListener-Resize');
        return()=>{
            window.removeEventListener('resize', handleResize);
            console.log('removeEventListener-Resize');
        }
    },[])
    

    return(
        <div id="myDIV">
            {width}
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
            {show&&
            <button 
                onClick={buttonScroll} 
                style={{
                    width: '80px', 
                    height: '25px', 
                    position: 'fixed', 
                    bottom:'100px', 
                    right:'100px', 
                    color:'#fff', 
                    backgroundColor:'#333'
                }}>
                    Lên trên
            </button>}
        </div>
    )
}

export default Content;
