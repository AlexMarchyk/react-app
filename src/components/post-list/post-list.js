import React from "react";
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList = ( {posts}) =>{

    const elements = posts.map((item)=>{
        // restr object
        const {id, ...itemProps} = item;
        return(
            <li key={id} className='list-group-item'>
                <PostListItem 
                    label={itemProps.label}
                    important ={itemProps.important} /> 
                    {/* or spread  
                        <PostListItem{...item}  /> 
                    */}
            </li>
            
        )
    })

    return (
        
        <ListGroup className="app-list ">
            {elements}
        </ListGroup>
    )
}
export default PostList;
