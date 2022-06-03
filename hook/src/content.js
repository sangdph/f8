import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react'
const lists = [
    {
        id: 1,
        name: "Sang là con cá siêu sấu",
    },{
        id: 2,
        name: "Con gà ăn con thỏ",
    },{
        id: 3,
        name: "Siêu khủng long ham ăn"
    }
]
function Content(){
    const [listId, setListId] = useState(1);

    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${listId}`, handleComment)
        return ()=>{
            window.removeEventListener(`lesson-${listId}`,handleComment);
        }
    },[listId])


    return (
        <div>
            {
                lists.map((list)=>(
                    <li key={list.id}
                        style={{
                            color: list.id === listId? "yellow": "purple",
                            backgroundColor: list.id === listId? "purple" : "yellow",
                            cursor: "pointer"
                        }}
                        onClick={()=>setListId(list.id)}
                    >
                        {list.name}
                    </li>
                ))
            }
        </div>
    )
}

export default Content;
