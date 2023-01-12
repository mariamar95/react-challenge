import React from "react"
import css from './css/Sidebar.module.css';


const Sidebar = (props) => {
    console.log(props);
    return (
        <div className = {css.sidebar}>
            <a href="#" target="_blank">My Photos</a>
            <a href="#" target="_blank">My Illustrations</a>
            <a href="#" target="_blank">My Partings</a>
        </div>
    );
};

export default Sidebar