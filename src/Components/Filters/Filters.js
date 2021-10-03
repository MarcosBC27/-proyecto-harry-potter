import React from 'react';
import imagenLogo from '../../resources/images/logo.jpg';
import './Filters.scss';

const Filters = ({ searchType, eventChangeSearchType }) => {

    const handlerChangeSearchType = () => {
        if (searchType === 1) {
            eventChangeSearchType(2);
        } else {
            eventChangeSearchType(1);
        }
    };

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
                    <button type="button" onClick={handlerChangeSearchType} className={`button ${searchType === 1 ? 'active' : 'inactive'}`}>ESTUDIANTES</button>
                </div>
                <div>
                    <button type="button" onClick={handlerChangeSearchType} className={`button ${searchType === 2 ? 'active' : 'inactive'}`}>STAFF</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
