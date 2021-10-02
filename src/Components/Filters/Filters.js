import React from 'react';
import './Filters.scss';

const Filters = () => {
    return (
        <div className="filters-container">
            <div>
                Titulo
            </div>
            <div>
                Selecciona tu filtro
            </div>
            <div className="actions">
                <div>
                    <button type="button">ESTUDIANTES</button>
                </div>
                <div>
                    <button type="button">STAFF</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
