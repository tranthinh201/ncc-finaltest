import React from 'react';
import './Home.css';
import cssImage from '../../assets/css-icon.png'
import htmlImage from '../../assets/html-icon.png'
import urlImage from '../../assets/url-icon.png'
import logoImg from '../../assets/logo.png'
import BoxText from './BoxText';

const data = [
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet",
        logo: cssImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    },
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet",
        logo: htmlImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    },
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet",
        logo: urlImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    }
]

function Home() {
    return (
        <div className='home'>
            <header>
                <img src={logoImg} alt="logo" />
            </header>
            <div className='text'>
                <h4>Lorem ipsum dolor sit asmet?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>

            <div className="list-text">
                <BoxText data={data}/>
            </div>
            <footer>
                <p>Copyright © 2021</p>
            </footer>
        </div>
    );
}

export default Home;