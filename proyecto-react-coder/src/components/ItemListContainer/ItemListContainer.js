import React from 'react';
import construccion from './assets/construccion.png';
import './styles/ItemListContainer.css';


export const ItemListContainer = () => {

    const clickear = () => { 
        console.log("categoria seleccionada")
    }
    return (
        <div className="container">
            <img src={construccion}/>
            <ul className="lista">
                <li><h2>Categorias</h2></li>
                <li onClick={clickear} >Remera</li>
                <li onClick={clickear} >Pantalon</li>
                <li onClick={clickear} >Camisa</li>
                <li onClick={clickear} >Calzado</li>
            </ul>
        </div>
    )
}
