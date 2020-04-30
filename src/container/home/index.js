import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar";
import BlogPost from "../../components/BlogPost";
import HomePost from "../../components/BlogPost/homePost";

function Home() {
    return(
        <div className="container">
            <HomePost/>
            <Sidebar/>
        </div>
    );
}

export default Home;