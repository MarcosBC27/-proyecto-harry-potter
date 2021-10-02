import React from 'react';
import Filters from './Filters/Filters';
import HeaderApp from './HeaderApp/HeaderApp';
import Results from './Results/Results';
import '../resources/sass/AppHarryPotter.scss';

const AppHarryPotter = () => {
    return (
        <div className="main-container">
            <HeaderApp />
            <Filters />
            <Results />
        </div>
    );
};

export default AppHarryPotter;
