import React, { useState } from 'react';
import imagenLogo from '../../resources/images/logo.jpg';
import './Filters.scss';

const Filters = () => {
    const [stateButton, setStateButton] = useState(1);

    return (
        <div className="filters-container">
            <div>
                <img src={imagenLogo} />
            </div>
            <div className="title">
                <strong>Selecciona tu filtro</strong>
            </div>
            <div className="actions">
                <div>
                    <button type="button" className={`button ${stateButton === 1 ? 'active' : 'inactive'}`}>ESTUDIANTES</button>
                </div>
                <div>
                    <button type="button" className={`button ${stateButton === 2 ? 'active' : 'inactive'}`}>STAFF</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
