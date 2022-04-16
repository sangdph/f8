import {useState, useEffect} from 'react'
const tasks=['posts', 'comments', 'albums'];

function Content(){
    const [time, setTime] = useState(10);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(prevState =>prevState-1);
        },1000)

        return ()=>{
            console.log('clearInterval-setInterVal');
            clearInterval(timerId);
        }
    },[])
    return(
        <div>
            {time}
        </div>
    )
}

export default Content;
