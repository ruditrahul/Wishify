import React,{ useContext } from 'react';
import Header from "./Header";
import {WishContext} from "./wishContent";
import List from "./List";
import "./Lists.css";


function Lists() {
    const [lists,setLists]=useContext(WishContext);
    return (
        <div>
        <Header/>
        <div className="lists">
        {console.log(lists)}
        {lists.map((list)=>(
            <List task={list} key={list.id}/>
        ))}
        </div>
        </div>
    )
}

export default Lists
