import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react'

function Content(){
    const [avatar, setAvatar] = useState();

    useEffect(()=>{
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])
    const handlePreviewAvatar =(e)=>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file.preview);
        setAvatar(file);
    }
    
    return(
        <div>
            <input
                type='file'
                onChange={handlePreviewAvatar}
                alt='Sang pro 123'
            />
            <br/>
            {avatar&&(<video width='300px' height='600px' controls>
                <source src={avatar.preview} type="video/mp4"/>
                <source src={avatar.preview} type="video/ogg"/>
            </video>)}
        </div>
    )
}

export default Content;
