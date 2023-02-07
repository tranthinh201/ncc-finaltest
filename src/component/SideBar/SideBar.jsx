import React from 'react';
import './Sidebar.css'

const list = [
    {
        name: 'Home',
    },
    {
        name: 'Services',
    },
    {
        name: 'News',
    },
    {
        name: 'Blog',
    },
    {
        name: 'Contact',
    },

]

function SideBar() {
    return (
        <div className='sidebar'>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{ item.name }</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideBar;