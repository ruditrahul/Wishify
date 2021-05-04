import React,{useContext} from 'react';
import "./List.css";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {WishContext} from "./wishContent";
import db from "./firebase";


function List({task, key}) {
    const [lists,setLists]=useContext(WishContext);
    console.log(key);

    function handleClick(e)
    {
        console.log(task.id);

        db.collection('WishList').doc(task.id).delete();

    }

    return (
        <div className="list">
        <div className="list1">
        <h3 contentEditable="true">{task.list.item_name}</h3>
        <h4 contentEditable="true">{task.list.brand_name}</h4>
        <a href={task.list.item_url}>{task.list.item_url}</a>
        </div>
        <div className="list2">
        <h3>{task.list.item_cost}</h3>
        <IconButton aria-label="delete" className="del-btn" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
        </div>
        </div>
    )
}

export default List
