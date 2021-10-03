import React, { useRef } from 'react';
import './HeaderApp.scss';

const HeaderApp = () => {

    const dropReference = useRef(null);

    const executeShow = () => {
        dropReference.current.classList.toggle("show");
    };

    return (
        <div className="header-container">
            <div className="right-m">
                <div class="dropdown">
                    <button onClick={executeShow} className="dropbtn">Dropdown</button>
                    <div ref={dropReference} className="dropdown-content">
                        <div className="item">a</div>
                        <div className="item">a</div>
                        <div className="item">a</div>
                        
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="dropbtn">Agregar</button>
            </div>
        </div>
    );
};

export default HeaderApp;
