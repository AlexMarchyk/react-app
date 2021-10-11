import React from "react";
import PostListItem from '../post-list-item';
import './post-list.css'

const PostList = ( {posts,onDelete}) =>{

    const elements = posts.map((item)=>{
        // restr object
        const {id, ...itemProps} = item;
        return(
            <li key={id} className='list-group-item'>
                <PostListItem 
                    label={itemProps.label}
                    important ={itemProps.important}
                    onDelete ={()=>onDelete(id)} /> 
                    {/* or spread  
                        <PostListItem{...item}  /> 
                    */}
            </li>
            
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;
