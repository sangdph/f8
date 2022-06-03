import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react'

const lessons = [
    {
        id: 1,
        name: "Huỳnh Thị Diễm Ngân"
    },
    {
        id: 2,
        name: "Đặng Phan Hoàng Sang",
    },
    {
        id:3,
        name: "Con cá siêu xấu pro vip"
    }
]
function Content(){
    const [lessonId, setLessonId] = useState(1);
    
    useEffect(()=>{
        const handleComment = ({detail}) =>{
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment);

        }
    },[lessonId]);
    return(
        <div>
            <ul>
                {lessons.map(lesson =>(
                    <li key={lesson.id}
                        style={{color:lessonId===lesson.id?
                            "red":
                            "green"
                            ,cursor:"pointer"
                        }}
                        onClick={()=>setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
