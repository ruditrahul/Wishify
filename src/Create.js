import React from 'react';
import Header from "./Header";
import "./Create.css";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import {WishContext} from "./wishContent";
import Button from '@material-ui/core/Button';
import db from "./firebase";
import firebase from "firebase";

function Create() {

    const [itemName,setName]=useState('');
    const [brandName,setBrand]=useState('');
    const [cost,setCost]=useState('');
    const [url,setUrl]=useState('');
    const [lists,setLists]=useContext(WishContext);

    // useEffect(()=>{
    //     db.collection('WishList').onSnapshot(snapshot=>{
    //         console.log(snapshot.docs.map((doc)=>(doc.data().WishList)))
    //         setLists(snapshot.docs.map((doc)=>(doc.data().WishList)));
    //     });
    // },[]);
    

    function handleName(e)
    {
        setName(e.target.value);
    }

    function handleBrand(e)
    {
        setBrand(e.target.value);
    }

    function handleCost(e)
    {
        setCost(e.target.value);   
    }

    function handleURL(e)
    {
        setUrl(e.target.value);
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("Getting Submitted");
        // setLists(prevItems=>[...prevItems,{
        //     item_id:(Math.floor(Math.random()*10000)),
        //     item_name:itemName,
        //     brand_name:brandName,
        //     item_cost:cost,
        //     item_url:url
        // }])
        db.collection('WishList').add({
            item_name:itemName,
            brand_name:brandName,
            item_cost:cost,
            item_url:url,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    return (
        <div>
        <Header/>
        <div className="create">
        <h1 className="create-heading" style={{'color':'#3f51b5'}}>Create your WishList</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Item Name" type="text" value={itemName} onChange={handleName}/>
                <input placeholder="Brand Name" type="text" value={brandName} onChange={handleBrand}/>
                <input placeholder="Cost" type="number" value={cost} onChange={handleCost} />
                <input placeholder="URL" type="url" value={url} onChange={handleURL} />
                <Button className="add-btn" size="large" variant="contained" color="primary" onClick={handleSubmit}>Add</Button>
                <Button className="check-btn" size="large" variant="contained" color="primary"><Link to="/lists" className="create-link">Check Your List</Link></Button>
                    
            </form>

        </div>
            
        </div>
    )
}

export default Create
