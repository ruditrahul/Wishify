import React, { useState,useEffect } from "react";
import { createContext } from "react";
import db from "./firebase";



export const WishContext=createContext();


export const WishProvider=(props)=>{


    const [lists,setLists]=useState([]);

    useEffect(()=>{
        db.collection('WishList').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            console.log(db);
            console.log(snapshot.docs.map((doc)=>({id:doc.id,list:doc.data()})))
            setLists(snapshot.docs.map((doc)=>({id:doc.id,list:doc.data()})));
        });
    },[]);
    



    return(
        <WishContext.Provider value={[lists,setLists]}>
            {props.children}
        </WishContext.Provider>

    )
}

