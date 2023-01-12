import React from "react"


const Sidebar = (props) => {
    console.log(props);
    return (
        <div>
            <a href="#" target="_blank">My Photos</a>
            <a href="#" target="_blank">My Illustrations</a>
            <a href="#" target="_blank">My Partings</a>
        </div>
    );
};

export default Sidebar