import React from 'react';
import { Link } from 'react-router-dom';

function TaskNavbar() {
    return (
        <div className="navbar" >
            <Link to="/about">ABOUT</Link>
            <Link to="/songs">SONGLIST</Link>
        </div>
    );
}

export default TaskNavbar;