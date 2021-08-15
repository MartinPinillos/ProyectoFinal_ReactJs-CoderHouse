import React from 'react';
import './styles/NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import logout from './assets/logout_icon_64px.png'

export const NavBar = () => {

    return(
        <header className="row">
            <div >
                <a className="brand" href="/">MiTienda</a>
            </div>
            <div className="row Nav-img">
                <CartWidget/>
                <a href="/">Log In</a>
            </div>
        </header>
    )
}