import React from 'react';
import './HeaderApp.scss';

const HeaderApp = () => {
    return (
        <div className="header-container">
            <div>
                <button type="button">Favoritos</button>
            </div>
            <div>
                <button type="button">Agregar</button>
            </div>
        </div>
    );
};

export default HeaderApp;
