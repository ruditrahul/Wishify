import React from 'react';
import Header from "./Header";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Home() {

    return (
        <div>
        <Header/>
        <div className="home">
        <img src="https://www.jotform.com/blog/wp-content/uploads/2019/09/How-to-get-started-selling-online-700x545.png" alt="CoverImage"/>
        <h2 className="home-title">
       Birthday? Holiday? Or want to keep track of all the cool things you want? Name your list, Add a photo and link of your item and quickly start building your wishlist.
        </h2>
        <Button className="btn" size="large" variant="contained" color="primary"><Link to="/create" className="create-link">Next</Link></Button>
        </div>
        </div>
    )
}

export default Home
